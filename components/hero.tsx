import { GetStartedButton } from "@/components/get-started-button"

// Hero with the cinematic film card. The v0 video (hero-demo.mp4) autoplays
// muted and looping, filling the frame beneath the clean overlay treatment.
// No controls: sound and a proper poster arrive with the real edited film.
export function Hero() {
  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="wrap">
        <span className="eyebrow hero__eyebrow reveal">
          <span className="dot" />
          Free AI interview prep · guildy.ai
        </span>
        <div className="hero__top reveal" data-delay="1">
          <h1 className="hero__title">
            Walk in <em>ready.</em>
          </h1>
          <div className="hero__cta">
            <GetStartedButton className="btn btn--dark" location="hero">
              Get started free
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </GetStartedButton>
            <a className="linklike" href="#tryit">
              Try it now
            </a>
          </div>
        </div>

        <p className="hero__sub reveal" data-delay="2">
          Interviewing is lonely and it is terrifying. Guildy is the command
          center for your whole job hunt, so you walk in calm.{" "}
          <strong>Because you actually did the work.</strong>
        </p>
        <div className="hero__meta reveal" data-delay="2">
          <span>Prep in about 20 seconds</span>
          <span className="sep" />
          <span>No signup to try</span>
          <span className="sep" />
          <span>Free to start</span>
        </div>
      </div>

      <div className="wrap">
        <div className="film reveal" data-delay="2" id="film">
          {/* v0 hero film. Swap point: replace the src below with the final
              edited cut (and add a poster) when it lands. One-line change. */}
          <video
            className="film__video"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label="Guildy product film"
          >
            <source src="/videos/hero-demo.mp4" type="video/mp4" />
          </video>
          <div className="film__sweep" />
          <div className="grain" />
          <div className="film__ui">
            <div className="film__row">
              <span className="film__tag">Guildy · The Hunt</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
