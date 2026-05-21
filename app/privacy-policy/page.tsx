import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Taj Cribs collects, uses and protects personal data under UK GDPR. Last updated 22 May 2026.',
  alternates: { canonical: '/privacy-policy' },
}

const CONTACT_EMAIL = 'support@tajcribs.co.uk'
const LAST_UPDATED = '22 May 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 text-white pt-[120px] pb-12 lg:pt-[160px] lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Legal</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-white/60">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <article className="mx-auto max-w-prose text-navy-900/85 [&_p]:my-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6">
            <h2 className="mt-0 mb-4 text-fluid-2xl font-bold tracking-tight">
              Introduction
            </h2>
            <p>
              We are Taj Cribs, a property management company operating across
              central London. This policy explains how we collect, use and
              protect personal information when you visit our website at
              https://www.tajcribs.co.uk or get in touch with us.
            </p>
            <p>
              If you have any questions about this policy or how we handle
              your data, contact us at {CONTACT_EMAIL}.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              What data we collect
            </h2>
            <p>
              When you ask for a free valuation, fill in our contact form, or
              talk to us by phone or email, we collect:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>The address and basic details of the property you want managed</li>
              <li>Anything else you choose to tell us in the message</li>
            </ul>
            <p>
              When you visit the website, we also collect some technical data
              automatically:
            </p>
            <ul>
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>The site that referred you, if any</li>
            </ul>
            <p>This is collected through standard web analytics tools and cookies.</p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              How we collect it
            </h2>
            <p>We collect data three ways:</p>
            <ol>
              <li>
                Through forms on the website (the Free Valuation form and the
                Contact form).
              </li>
              <li>Through direct calls and emails from you to us.</li>
              <li>Automatically through analytics when you visit the site.</li>
            </ol>
            <p>
              We do not buy contact data from third parties or scrape it from
              public sources.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Why we collect it
            </h2>
            <p>We use your data to:</p>
            <ul>
              <li>Respond to your enquiry and provide a valuation</li>
              <li>
                Deliver our property management or guaranteed rent services
                if you become a client
              </li>
              <li>
                Send you service-related communications, for example monthly
                payment reports
              </li>
              <li>Improve the website based on how visitors use it</li>
              <li>
                Comply with tax, regulatory and legal record keeping
                obligations
              </li>
            </ul>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Lawful basis under UK GDPR
            </h2>
            <p>We rely on four lawful bases depending on the activity:</p>
            <ul>
              <li>
                <strong>Consent.</strong> Where you opt in to receive
                marketing communications.
              </li>
              <li>
                <strong>Contract.</strong> To deliver services to you once
                you become a client.
              </li>
              <li>
                <strong>Legitimate interests.</strong> For analytics, site
                improvement, and contacting you about your existing enquiry.
              </li>
              <li>
                <strong>Legal obligation.</strong> For tax records and
                regulatory compliance.
              </li>
            </ul>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Who we share it with
            </h2>
            <p>
              We share data with a small number of service providers who help
              us run the business:
            </p>
            <ul>
              <li>Vercel, who hosts our website.</li>
              <li>
                Our email and CRM tools, which store communication history
                with you.
              </li>
              <li>Analytics providers, if we use Google Analytics or similar.</li>
              <li>HMRC and other UK authorities, where the law requires it.</li>
            </ul>
            <p>
              We do not sell your data to anyone. We do not share it with
              advertisers. We do not pass it to other agents.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              How long we keep it
            </h2>
            <p>
              If you enquire but do not become a client, we keep your data
              for 2 years after your last contact with us, then delete it.
            </p>
            <p>
              If you become a client, we keep your data for 7 years after
              the end of our contract with you. This is needed for tax and
              regulatory reasons.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Your rights under UK GDPR
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Have inaccurate data corrected</li>
              <li>Have your data deleted in certain circumstances</li>
              <li>Restrict or object to certain types of processing</li>
              <li>Have your data ported to another provider</li>
              <li>Withdraw consent for marketing at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              {CONTACT_EMAIL}.
            </p>
            <p>
              You also have the right to complain to the Information
              Commissioner&apos;s Office, the UK&apos;s data protection
              regulator, at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-gold-500 underline-offset-4 hover:text-gold-600 transition-colors"
              >
                ico.org.uk
              </a>
              . We would prefer the chance to address your concern first, but
              you can go direct if you prefer.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Cookies
            </h2>
            <p>
              Our site uses cookies. Some are essential for the site to
              function, for example to remember your form input. Others are
              analytical, helping us understand which pages visitors use most.
            </p>
            <p>
              You can disable cookies in your browser settings, but parts of
              the site may not work properly without them.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              International transfers
            </h2>
            <p>
              Most of our data is processed in the UK and the EU. Some of our
              service providers, including our hosting provider Vercel,
              operate from the United States. Where data is transferred
              outside the UK, we rely on appropriate safeguards (the UK
              addendum to the EU Standard Contractual Clauses) to keep your
              data protected.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Children
            </h2>
            <p>
              Our services are aimed at property owners, who are adults. We
              do not knowingly collect personal data from anyone under 18. If
              you believe a child has given us data, please email us and we
              will delete it.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. The &quot;last
              updated&quot; date at the top of the page reflects the most
              recent change. If we make material changes, we will let
              existing clients know by email.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Contact
            </h2>
            <p>
              For any questions about this policy or how we handle your data,
              email us at {CONTACT_EMAIL}.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
