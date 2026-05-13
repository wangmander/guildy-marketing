import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Guildy: Applying is easy. Landing is hard."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #2C1731 0%, #412A45 55%, #5C2F66 100%)",
          color: "#F5F5F0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "#F3E8F6",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#F3E8F6",
              color: "#2C1731",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            G
          </div>
          Guildy
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            Applying is easy.
          </div>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#E8D5EB",
            }}
          >
            Landing is hard.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "#D9C2DD",
          }}
        >
          <div>Stage-specific interview prep, tied to your pipeline.</div>
          <div style={{ color: "#F3E8F6", fontWeight: 600 }}>guildy.ai</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
