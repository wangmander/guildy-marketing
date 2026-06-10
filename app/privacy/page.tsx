import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy · Guildy",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="mx-auto max-w-[720px] px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <article className="text-foreground leading-[1.7]">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Effective Date: May 8, 2026</p>

          <div className="space-y-1 mb-10">
            <p>
              <strong>Company Name:</strong> Guildy.ai, Inc.
            </p>
            <p>
              <strong>Product/App:</strong> Guildy.ai
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://guildy.ai" className="text-accent hover:underline">
                https://guildy.ai
              </a>
            </p>
            <p>
              <strong>Contact Email:</strong>{" "}
              <a href="mailto:support@guildy.ai" className="text-accent hover:underline">
                support@guildy.ai
              </a>
            </p>
            <p>
              <strong>Business Address:</strong> Guildy.ai, Inc., San Francisco, CA, USA
            </p>
          </div>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Introduction</h2>
            <p>
              Guildy is a job pipeline tracker with AI-driven interview preparation. This Privacy
              Policy explains how we collect, use, store, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Data We Access</h2>
            <p>
              We only collect information you provide directly or that is required to operate the
              Service.
            </p>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Account Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address (for authentication and account communication)</li>
              <li>Name and avatar (optional, for display)</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">User-Provided Content</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resume text (provided once during onboarding, used to personalize prep)</li>
              <li>Job descriptions you paste into the Service</li>
              <li>
                Interview-related messages you paste (e.g., recruiter emails, scheduling notes)
              </li>
              <li>Interviewer information you provide (name, title, link)</li>
              <li>Notes and additional context you add to a job</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Pipeline Metadata</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Job stages, timestamps, drag-drop history within the Service</li>
              <li>Multi-session interview round configuration</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Generated Content</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                AI-generated interview prep output (positioning, risks, sample questions, prep
                checklists)
              </li>
              <li>Cached prep versions tied to your inputs</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Subscription Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Stripe customer ID and subscription status (no card numbers; payment processing is
                handled by Stripe)
              </li>
            </ul>

            <p className="mt-4">
              We do not access your email inbox, calendar, contacts, files, or any third-party
              accounts.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Purpose of Data Use</h2>
            <p>We use your data only to provide core user-visible features:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Display your job pipeline</li>
              <li>Generate stage-aware interview preparation</li>
              <li>Maintain your account and process payments</li>
              <li>Improve the reliability and performance of the Service</li>
            </ul>
            <p className="mt-4">We do not use your data for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Advertising or marketing</li>
              <li>Profiling unrelated to job-search assistance</li>
              <li>Data sales or brokerage</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Storage &amp; Retention</h2>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">We Store</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account info (email, name, avatar)</li>
              <li>Resume text</li>
              <li>Pasted job descriptions, messages, interviewer info, notes</li>
              <li>Pipeline metadata (stages, timestamps)</li>
              <li>Generated prep output cached against your inputs</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Retention Rules</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data persists for the lifetime of your account</li>
              <li>If you delete your account, all associated data is purged within 30 days</li>
              <li>Backups roll off on normal rotation (typically 30 days)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Sharing &amp; Transfers</h2>
            <p>We do not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Sell personal data</li>
              <li>Share your content with advertisers</li>
              <li>Allow third parties to train AI models on your data</li>
            </ul>
            <p className="mt-4">
              We may use service providers acting solely as data processors under confidentiality
              restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Supabase (database and authentication)</li>
              <li>Anthropic (LLM provider for prep generation)</li>
              <li>Stripe (payment processing)</li>
              <li>PostHog (product analytics)</li>
              <li>Vercel (hosting)</li>
            </ul>
            <p className="mt-4">
              Each processor handles only the data necessary for their specific function.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">
              AI &amp; Machine Learning
            </h2>
            <p>
              Guildy sends limited text context (resume excerpts, pasted job descriptions,
              interview messages, interviewer info) to AI providers (currently Anthropic) to
              generate interview preparation. Our AI providers contractually agree not to train on
              your data. For grounding, the Service may perform a single web search per Deep Prep
              generation to gather public company context (recent news, funding, competitors).
              Search queries do not include your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Security</h2>
            <p>We implement standard security measures, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>TLS encryption in transit</li>
              <li>Encrypted data storage</li>
              <li>Restricted production access with logging</li>
              <li>Role-based internal access controls</li>
              <li>Secure secrets management</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">User Controls</h2>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Delete Your Data</h3>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Delete your account inside Guildy (Settings → Delete Account)</li>
              <li>Email us at support@guildy.ai to request deletion</li>
            </ul>

            <p className="mt-4">Full deletion includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Account</li>
              <li>Resume text and all pasted content</li>
              <li>Pipeline data and metadata</li>
              <li>Generated prep versions</li>
              <li>Subscription cancellation (if active)</li>
            </ul>

            <p className="mt-4">Backups delete on normal rotation.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Children's Privacy</h2>
            <p>
              Guildy is not intended for children under 16. We do not knowingly collect data from
              children. If you believe we have, contact us for prompt deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">
              International Transfers
            </h2>
            <p>
              Data may be processed in the United States. Where required, we apply appropriate
              safeguards for international transfers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Changes to This Policy</h2>
            <p>
              We may update this policy. Any updates will be posted here with a new effective date.
              Material changes may be communicated via email or in-app notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
            <p>
              Guildy.ai, Inc.
              <br />
              San Francisco, CA, USA
              <br />
              <a href="mailto:support@guildy.ai" className="text-accent hover:underline">
                support@guildy.ai
              </a>
            </p>
          </section>

          <section className="border-t pt-8 mt-10">
            <p className="font-semibold">By using Guildy, you agree to this Privacy Policy.</p>
          </section>
        </article>
      </div>
      <SiteFooter />
    </div>
  )
}
