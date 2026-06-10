import { GetStartedButton } from "@/components/get-started-button"

export function CloseCta() {
  return (
    <section className="close section" id="close" data-screen-label="Close">
      <div className="wrap">
        <span className="eyebrow close__eyebrow reveal">Your next interview</span>
        <h2 className="display close__title reveal" data-delay="1">
          Stop guessing.
          <br />
          <em>Start landing.</em>
        </h2>
        <p className="close__sub reveal" data-delay="2">
          Build the prep, track the pipeline, and walk in calm. The work is the
          confidence.
        </p>
        <div className="close__cta reveal" data-delay="2">
          <GetStartedButton className="btn btn--dark btn--lg" location="close">
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
            Try a prep first
          </a>
        </div>
        <p className="close__reassure reveal" data-delay="3">
          Free to start · No credit card
        </p>
      </div>
    </section>
  )
}
