import { NextRequest, NextResponse } from "next/server";
import {
  resolveVisitor,
  buildSetCookieHeader,
  checkGate,
} from "@/lib/tools/usage-gate";

/** GET /api/tools/usage?toolId=xxx — check current gate status */
export async function GET(request: NextRequest) {
  const toolId = request.nextUrl.searchParams.get("toolId") ?? "generic";
  const cookieHeader = request.headers.get("cookie");
  const { visitorId, isNew } = resolveVisitor(cookieHeader);
  const gate = checkGate(visitorId, toolId);

  const res = NextResponse.json({ visitorId, usageCount: gate.usageCount, gate });

  if (isNew) {
    res.headers.set("Set-Cookie", buildSetCookieHeader(visitorId));
  }

  return res;
}
