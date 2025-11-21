"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Privacy Policy</h1>
          <div className="mb-8 space-y-1">
            <p className="text-sm text-muted-foreground">Effective Date: October 31, 2025</p>
            <p className="text-sm text-muted-foreground">Company Name: Guildy.ai, Inc.</p>
            <p className="text-sm text-muted-foreground">Product/App: Guildy.ai</p>
            <p className="text-sm text-muted-foreground">Website: https://guildy.ai</p>
            <p className="text-sm text-muted-foreground">Contact Email: support@guildy.ai</p>
            <p className="text-sm text-muted-foreground">Business Address: Guildy.ai, Inc., San Francisco, CA, USA</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Guildy helps users convert their Gmail job-related email threads into a visual job pipeline and provides
              AI interview preparation tools. This Privacy Policy explains how we collect, use, store, and protect your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Google API Services Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our use and transfer of information received from Google APIs adheres to the Google API Services User Data
              Policy, including the Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data We Access</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We only request the minimum access necessary to operate Guildy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Google OAuth Scopes Requested</h3>
            <div className="mb-4">
              <p className="font-semibold text-foreground mb-2">Required Scope</p>
              <p className="text-muted-foreground font-mono text-sm mb-2">
                https://www.googleapis.com/auth/gmail.readonly
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Read-only access to Gmail messages and metadata to detect job-related threads, infer stages, and display
                timeline context.
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-foreground mb-2">Identity Scopes</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground font-mono text-sm">
                <li>openid</li>
                <li>email</li>
                <li>profile</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Used only for authentication and displaying your account profile.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed font-semibold">
              We never request permission to send, delete, or modify email.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Gmail Data We Process</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">We access:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Message metadata (message ID, thread ID, from/to, subject, date, labels)</li>
              <li>Limited text snippets for pipeline creation and stage detection</li>
              <li>
                Parsed context such as interview-related phrases (e.g., "schedule interview," "next round," "offer,"
                "unfortunately")
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not access Drive, Calendar, Photos, Contacts, or non-Gmail Google services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Purpose of Data Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use Gmail data only to provide core user-visible features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Identify job-related threads and group them into pipelines</li>
              <li>Determine interview stage and timeline context</li>
              <li>Provide interview prep content tailored to the pipeline stage</li>
              <li>Support user notes and organization</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-2">We do not use Gmail data for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Advertising or marketing</li>
              <li>Profiling unrelated to job-search assistance</li>
              <li>Data sales or brokerage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Storage & Retention</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">We Store</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Account info (email, name, avatar)</li>
                <li>Gmail message/thread IDs, subject, participants, date</li>
                <li>Minimal snippets needed for pipeline view and classification</li>
                <li>Stage inference results, confidence scores, and timeline history</li>
                <li>Interview prep notes and transcripts (if you use the feature)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">We Do Not Store</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Full Gmail inbox contents</li>
                <li>Email attachments unless explicitly surfaced by the user</li>
                <li>Drafts, chats, or unrelated messages</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Retention Rules</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not persist full raw email bodies</li>
                <li>Temporary classification data is deleted within 30 days</li>
                <li>Snippet storage is strictly limited to text required for the product</li>
                <li>
                  If the user disconnects Gmail, syncing stops immediately and Gmail-derived data is purged within 30
                  days
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sharing & Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">We do not:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sell personal data</li>
              <li>Share Gmail content with advertisers</li>
              <li>Allow third parties to train AI models on your data</li>
              <li>
                Allow human access to Gmail content unless required by law, abuse prevention, or user-initiated support
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We may use service providers acting solely as data processors under confidentiality and Limited Use
              restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">AI & Machine Learning</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Guildy may send limited text context (or de-identified features) to an AI model to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Infer interview stages</li>
              <li>Generate interview prep questions and feedback</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We require all AI vendors to not train on your data, consistent with Google's Limited Use policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We implement strong security measures, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>TLS encryption in transit</li>
              <li>Encrypted data storage</li>
              <li>Restricted production access with logging</li>
              <li>Role-based internal access controls</li>
              <li>Secure secrets management</li>
              <li>Regular security reviews and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Controls</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Revoke Gmail Access Anytime</h3>
              <p className="text-muted-foreground font-mono text-sm mb-2">https://myaccount.google.com/permissions</p>
              <p className="text-muted-foreground leading-relaxed">
                Revoking access stops syncing immediately and triggers Gmail-derived data removal within 30 days.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Delete Your Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">You may:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Delete your account inside Guildy (Settings → Delete Account)</li>
                <li>Email us at support@guildy.ai to request deletion</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-2">Full deletion includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Account</li>
                <li>Pipelines</li>
                <li>Metadata/snippets</li>
                <li>Interview prep data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">Backups delete on normal rotation.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Guildy is not intended for children under 16.</li>
              <li>We do not knowingly collect data from children.</li>
              <li>If you believe we have, contact us for prompt deletion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">International Transfers</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Data may be processed in the United States.</li>
              <li>Where required, we apply appropriate safeguards for international transfers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We may update this policy. Any updates will be posted here with a new effective date.</li>
              <li>Material changes may be communicated via email or in-app notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Guildy.ai, Inc.
              <br />
              San Francisco, CA, USA
              <br />
              support@guildy.ai
            </p>
          </section>

          <section className="border-t pt-8 mt-8">
            <p className="text-muted-foreground leading-relaxed font-semibold">
              By using Guildy, you agree to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
