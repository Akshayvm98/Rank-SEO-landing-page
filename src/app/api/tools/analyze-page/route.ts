import { NextRequest, NextResponse } from "next/server";
import { analyzePage } from "@/lib/tools/page-analyzer";
import {
  resolveVisitor,
  buildSetCookieHeader,
  checkGate,
  incrementUsage,
} from "@/lib/tools/usage-gate";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = typeof body?.url === "string" ? body.url.trim() : "";
    const toolId = typeof body?.toolId === "string" ? body.toolId : "generic";

    if (!url) {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 },
      );
    }

    // Resolve visitor & check gate
    const cookieHeader = request.headers.get("cookie");
    const { visitorId, isNew } = resolveVisitor(cookieHeader);
    const gate = checkGate(visitorId, toolId);

    if (!gate.allowed) {
      const res = NextResponse.json(
        { success: false, error: "Daily usage limit reached. Sign up for unlimited access.", gate },
        { status: 429 },
      );
      if (isNew) {
        res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
      }
      return res;
    }

    // Run analysis
    const data = await analyzePage(url);

    // Increment usage after successful analysis
    incrementUsage(visitorId, toolId);
    const updatedGate = checkGate(visitorId, toolId);

    const res = NextResponse.json({ success: true, data, gate: updatedGate });

    if (isNew) {
      res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
    }

    return res;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    return NextResponse.json(
      { success: false, error: message },
      { status: 422 },
    );
  }
}
