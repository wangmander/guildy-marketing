// Stage-aware prep credibility + Quick/Deep tiers. Shipped capabilities only.
const STAGES = [
  {
    num: "Round 01",
    name: "The Screen",
    tests: "Tests · signal and fit",
    body: "Warm-up framing, a crisp story, and the few questions that decide whether you move on. Get past the gate without overthinking it.",
    delay: "1",
  },
  {
    num: "Round 02",
    name: "Hiring Manager",
    tests: "Tests · scope and judgment",
    body: "Leadership lens. Ownership, tradeoffs, and operating style under ambiguity. Prep that proves you can carry the surface, not just code on it.",
    delay: "2",
  },
  {
    num: "Round 03",
    name: "Full Loop",
    tests: "Tests · executive presence",
    body: "The full day. Panel dynamics, cross-functional pressure, and the calm to hold the room across every back-to-back conversation.",
    delay: "3",
  },
]

const FREE_FEATURES = [
  "What this round actually tests",
  "How to position yourself",
  "The questions to expect",
  "No signup to try",
]

const DEEP_FEATURES = [
  "Round-by-round question sets",
  "Model answers in your voice",
  "Interviewer and company insight",
  "A story bank you reuse every loop",
]

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function HowTiers() {
  return (
    <section className="how section" id="how" data-screen-label="How it works">
      <div className="wrap">
        <div className="section__head center reveal">
          <span className="eyebrow kicker">Stage-aware prep</span>
          <h2 className="display h2">
            A screen is not a final loop.
            <br />
            Your prep should know that.
          </h2>
          <p className="lead">
            Guildy reads which round you are actually in and builds for that
            specific bar, not the same generic question list everyone else walks
            in with.
          </p>
        </div>

        <div className="stages">
          {STAGES.map((s) => (
            <div className="stage reveal" data-delay={s.delay} key={s.name}>
              <div className="stage__num">{s.num}</div>
              <div className="stage__name">{s.name}</div>
              <div className="stage__tests">{s.tests}</div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        <div
          className="section__head center reveal"
          id="pricing"
          style={{ marginTop: "96px" }}
        >
          <span className="eyebrow kicker">Two ways in</span>
          <h2 className="display h2">
            Quick Prep is free. Deep Prep goes all in.
          </h2>
        </div>

        <div className="tiers">
          <div className="tier tier--free reveal" data-delay="1">
            <div className="tier__row">
              <span className="tier__name">Quick Prep</span>
              <span className="tier__price">Free forever</span>
            </div>
            <p className="tier__desc">
              The fast read on any round. Paste, generate, and walk away knowing
              exactly what the interview is testing.
            </p>
            <ul className="tier__list">
              {FREE_FEATURES.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="tier tier--deep reveal" data-delay="2">
            <div className="grain tier__grain" />
            <div className="tier__row">
              <span className="tier__name">Deep Prep</span>
              <span className="tier__price">Paid</span>
            </div>
            <p className="tier__desc">
              When the round actually matters. Guildy goes deep on the company,
              the interviewer, and your own story bank.
            </p>
            <ul className="tier__list">
              {DEEP_FEATURES.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
