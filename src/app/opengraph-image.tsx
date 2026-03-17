import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rank SEO — AI-Powered SEO Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #f0fdfa 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0d9488, #2dd4bf)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Rank SEO
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "800px",
            marginBottom: "20px",
          }}
        >
          Turn your website into a traffic engine
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "24px",
            color: "#64748b",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          AI-powered SEO automation. From search data to published content.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            marginTop: "48px",
            width: "80px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
