// Command-center vision. Copy and vision only, no fabricated product UI.
const ARC = [
  { n: "01", name: "Find", desc: "Spot roles worth your energy." },
  { n: "02", name: "Track", desc: "Every round in one pipeline." },
  { n: "03", name: "Prep", desc: "Tuned to the round you are in." },
  { n: "04", name: "Compare", desc: "See comp without the spreadsheet." },
  { n: "05", name: "Negotiate", desc: "Walk in knowing your number." },
]

export function Narrative() {
  return (
    <section
      className="narrative section"
      id="vision"
      data-screen-label="Command center"
    >
      <div className="wrap">
        <div className="narrative__head reveal">
          <span className="eyebrow kicker">
            The whole hunt, one command center
          </span>
          <h2 className="display narrative__title">
            Manage the hunt,
            <br />
            not just the <em>interview.</em>
          </h2>
          <p className="narrative__sub">
            Most tools hand you a tracker or a single prep gadget. Guildy runs
            the entire arc: find the roles, move the pipeline, prep every round,
            weigh the offers, walk into the negotiation ready.
          </p>
        </div>

        <div className="arc reveal" data-delay="1">
          <div className="arc__line" />
          {ARC.map((s) => (
            <div className="arc__stage" key={s.n}>
              <div className="arc__node">{s.n}</div>
              <div className="arc__name">{s.name}</div>
              <div className="arc__desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="narrative__statement reveal" data-delay="1">
          <p>
            The hunt is heavy because you carry it alone, in ten browser tabs
            and a spreadsheet that lies to you.{" "}
            <span className="dim">
              Guildy carries it with you, so the only thing left to bring is
              yourself.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
