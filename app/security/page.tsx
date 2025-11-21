"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function SecurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Security</h1>
          <div className="mb-8 space-y-1">
            <p className="text-sm text-muted-foreground">Effective Date: October 31, 2025</p>
            <p className="text-sm text-muted-foreground">Company: Guildy.ai, Inc.</p>
            <p className="text-sm text-muted-foreground">Product: Guildy</p>
            <p className="text-sm text-muted-foreground">Website: https://guildy.ai</p>
            <p className="text-sm text-muted-foreground">Security Contact: security@guildy.ai</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Guildy.ai, Inc. prioritizes protecting user data and maintaining the integrity and confidentiality of
              information processed through Guildy. We apply industry-standard security practices to protect Gmail data,
              personal information, and authentication credentials.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We designed our infrastructure and internal processes to ensure user data is secure at every stage — from
              authorization to storage to deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Access & Permissions</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Guildy uses Google OAuth 2.0 for secure authentication</li>
              <li>Guildy requests the read-only Gmail scope</li>
              <li>Guildy never sends, deletes, or modifies emails</li>
              <li>Only email content relevant to job-search context is processed</li>
              <li>No employee access to user mailbox data unless legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Minimization</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Guildy only stores the minimum information needed to provide the service:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Stored:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Gmail message/thread IDs</li>
                <li>From/to fields</li>
                <li>Subject lines</li>
                <li>Email timestamps</li>
                <li>Relevant minimal text snippets for interview stage inference</li>
                <li>Pipeline data and user notes</li>
                <li>Authentication details (OAuth tokens encrypted)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Not Stored:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Full email bodies</li>
                <li>Attachments</li>
                <li>Drafts, chats, or unrelated messages</li>
                <li>Entire inbox copies</li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Temporary text used for LLM classification is purged automatically within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Encryption</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>TLS 1.2+ encryption in transit</li>
              <li>AES-256 encryption at rest</li>
              <li>Tokens and secrets stored in secure secret management systems</li>
              <li>No plaintext token storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Infrastructure Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Hosted on secure, SOC-compliant cloud platforms</li>
              <li>Production systems isolated from development environments</li>
              <li>Strict least-privilege access controls</li>
              <li>Continuous system logging and monitoring</li>
              <li>Role-based access for internal tools</li>
              <li>Automated backups with secure lifecycle handling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Identity & Authentication</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Google OAuth 2.0 + OpenID Connect</li>
              <li>Guildy does not store user passwords</li>
              <li>Token rotation and secure token storage enforced</li>
              <li>Multi-factor access controls for internal systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">AI & Data Processing Safety</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Limited text sent to LLM services strictly to generate interview preparation and identify
                interview-related signals
              </li>
              <li>No model training on user data</li>
              <li>Providers contractually restricted from retaining or reusing data</li>
              <li>AI requests encrypted in transit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Employee & Access Controls</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>No manual inbox access for employees</li>
              <li>Access to production systems limited to authorized personnel</li>
              <li>All admin access logged and periodically reviewed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Vulnerability Management</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Security patches applied regularly</li>
              <li>Dependency monitoring and upgrades</li>
              <li>Network and application-level threat monitoring</li>
              <li>Alerts for suspicious or unauthorized access attempts</li>
              <li>Standard incident response procedures in place</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention & Deletion</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Gmail sync stops immediately when a user disconnects Google access</li>
              <li>Gmail-derived cached data removed within 30 days of disconnect</li>
              <li>Account deletion in the app triggers removal of all stored data</li>
              <li>Backup data deleted according to secure lifecycle schedules</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible Disclosure & Reporting</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe you've discovered a security vulnerability affecting Guildy:
            </p>
            <div className="mb-4">
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Email:</strong> security@guildy.ai
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Subject line:</strong> Security Vulnerability Report
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <strong>Include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Detailed description</li>
              <li>Reproduction steps</li>
              <li>Severity/impact context (if known)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">We review all reports and act promptly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Compliance & Commitments</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Guildy.ai, Inc. adheres to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Google API Services User Data Policy</li>
              <li>Limited Use Requirements</li>
              <li>OAuth Restricted Scope security standards</li>
              <li>Industry-standard data protection practices</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We never sell, lease, or share Gmail data for advertising or profiling.
            </p>
          </section>

          <section className="border-t pt-8 mt-8">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Last Updated:</strong> October 31, 2025
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
