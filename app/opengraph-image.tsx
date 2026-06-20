import { ImageResponse } from "next/og"

// Dynamic 1200x630 share card rendered at the edge. Plum/paper editorial
// tokens, headline + wedge subline. Bricolage Grotesque is fetched for the
// display face; if the fetch fails the layout falls back to the system stack.
export const runtime = "edge"
export const alt = "Guildy: Walk in ready"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Token mirror (cannot read CSS vars here): plum editorial palette.
const PAPER = "#F4F1E9"
const INK = "#221A20"
const INK2 = "#5A5158"
const PLUM = "#7A4D82"
const LINE = "#E3DDCF"

async function loadBricolage(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text())
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:woff2|truetype|opentype)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const bricolage = await loadBricolage()
  const display = bricolage ? "Bricolage Grotesque" : "sans-serif"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: display,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 40,
              height: 44,
              background: PLUM,
              color: PAPER,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              clipPath: "polygon(50% 0, 100% 0, 100% 58%, 50% 100%, 0 58%, 0 0)",
            }}
          >
            G
          </div>
          guildy
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {/* Satori honors margins on flex/block boxes, not bare spans, and
                trims whitespace between text nodes, so use flex divs + margin. */}
            <div style={{ display: "flex", marginRight: 30 }}>Walk in</div>
            <div style={{ display: "flex", color: PLUM, fontStyle: "italic" }}>
              ready.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: INK2,
              letterSpacing: "-0.01em",
              maxWidth: 900,
            }}
          >
            Interview prep built from the real job and your resume.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: INK2,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 24,
          }}
        >
          <span>Free Quick Prep in about 20 seconds</span>
          <span style={{ color: PLUM }}>·</span>
          <span>No signup</span>
          <span style={{ color: PLUM }}>·</span>
          <span>www.guildy.ai</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: bricolage
        ? [{ name: "Bricolage Grotesque", data: bricolage, weight: 700, style: "normal" }]
        : [],
    },
  )
}
