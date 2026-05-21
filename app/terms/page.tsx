import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms governing use of the Taj Cribs website. Last updated [date].',
  alternates: { canonical: '/terms' },
}

const CONTACT_EMAIL_PLACEHOLDER = '[CONTACT EMAIL TO BE INSERTED]'
const LAST_UPDATED_PLACEHOLDER = '[LAST UPDATED DATE]'

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 text-white pt-[120px] pb-12 lg:pt-[160px] lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="container-edge relative max-w-3xl">
          <SectionLabel className="!justify-start">Legal</SectionLabel>
          <h1 className="mt-6 text-hero font-extrabold tracking-tightest leading-[0.95]">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-sm text-white/60">
            Last updated: {LAST_UPDATED_PLACEHOLDER}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-cream section-pad">
        <div className="container-edge">
          <article className="mx-auto max-w-prose text-navy-900/85 [&_p]:my-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6">
            <h2 className="mt-0 mb-4 text-fluid-2xl font-bold tracking-tight">
              Introduction
            </h2>
            <p>
              We are Taj Cribs, a property management company based in
              central London. These terms govern your use of our website at
              https://www.tajcribs.co.uk.
            </p>
            <p>
              If you do not agree to these terms, please do not use the site.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Acceptance
            </h2>
            <p>
              By browsing or using the website, you agree to these terms. We
              may update them from time to time, and continued use of the
              site after changes means you accept the updated version.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Services on the website
            </h2>
            <p>
              The website provides information about our property management
              and guaranteed rent services. It is not itself a service
              contract.
            </p>
            <p>
              If you decide to engage us, the specific services we provide
              will be set out in a separate written agreement signed at the
              start of our work together. Information on this website is
              general and informational only. It is not a binding offer.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Free Valuation
            </h2>
            <p>
              Submitting our Free Valuation form is a request for a
              no-obligation valuation of your property.
            </p>
            <p>
              Any estimates we give before inspecting the property are
              indicative. They reflect our current view of comparable
              properties and area-level demand, but they are not guarantees
              of achievable rent or income.
            </p>
            <p>
              Final figures are confirmed in a formal written proposal after
              we have seen your property.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Accuracy of information
            </h2>
            <p>
              We try to keep the website accurate and up to date. We do not
              warrant that everything on it is complete, current or free
              from error.
            </p>
            <p>
              Rental figures, occupancy rates and testimonials reflect
              specific past situations and properties. They are not promises
              of what your property will earn.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Intellectual property
            </h2>
            <p>
              All content on this website (text, images, logos, design,
              code) is owned by Taj Cribs or licensed to us. You may not
              copy, reproduce or republish any of it without our written
              permission.
            </p>
            <p>
              You may share links to our pages on social media or in private
              messages, and you may print a page for personal reference.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Third-party links
            </h2>
            <p>
              The website may link to external sites that we do not control.
              We are not responsible for the content, accuracy or practices
              of those sites. Following a link is at your own risk.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Limitation of liability
            </h2>
            <p>
              We do our best to keep the website running smoothly and the
              information on it useful. We are not liable for any indirect
              or consequential loss you may suffer from using the website,
              including loss of income, business or data.
            </p>
            <p>
              Nothing in these terms excludes or limits our liability for
              anything that cannot be excluded under UK law, including
              liability for death or personal injury caused by our
              negligence, or for fraud or fraudulent misrepresentation.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of England and Wales. Any
              disputes that cannot be resolved between us will be handled by
              the courts of England and Wales, which have exclusive
              jurisdiction.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Changes
            </h2>
            <p>
              We may update these terms at any time without notice. The
              &quot;last updated&quot; date at the top of the page reflects
              the most recent change. Continued use of the website after
              changes means you accept the new version.
            </p>

            <h2 className="mt-12 mb-4 text-fluid-2xl font-bold tracking-tight">
              Contact
            </h2>
            <p>
              For any questions about these terms, email us at{' '}
              {CONTACT_EMAIL_PLACEHOLDER}.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
