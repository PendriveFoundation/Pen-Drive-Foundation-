import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="bg-[#EAF4EC] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
         

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#315C42]">
            Legal Information
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#52635A]">
            Please read these terms carefully before using the Pen-Drive
            Foundation website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl space-y-10">

          <div>
            <h2>1. Introduction</h2>
            <p>
              Welcome to the official website of Pen-Drive Foundation. By
              accessing or using this website, you agree to comply with and be
              bound by these Terms & Conditions. If you do not agree with any
              part of these terms, please do not use the website.
            </p>
          </div>

          <div>
            <h2>2. About Pen-Drive Foundation</h2>
            <p>
              Pen-Drive Foundation is a non-profit organization established in
              2013 and works towards education, empowerment, livelihood
              development, healthcare awareness, rural development, community
              development and other social welfare initiatives.
            </p>
          </div>

          <div>
            <h2>3. Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not violate the rights of the Foundation or any
              other person.
            </p>

            <ul>
              <li>Do not use the website for unlawful or fraudulent purposes.</li>
              <li>Do not attempt to damage or disrupt the website.</li>
              <li>Do not upload or transmit harmful or malicious content.</li>
              <li>Do not misuse information obtained from this website.</li>
            </ul>
          </div>

          <div>
            <h2>4. Website Content</h2>
            <p>
              The information, photographs, text, graphics, documents and other
              materials published on this website are provided for general
              informational purposes and to showcase the work and activities of
              Pen-Drive Foundation.
            </p>
            <p>
              While reasonable efforts are made to keep the information
              accurate and updated, the Foundation does not guarantee that all
              information will always be complete, current or error-free.
            </p>
          </div>

          <div>
            <h2>5. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the content and materials available on
              this website, including text, graphics, logos, photographs and
              other original materials, belong to or are used by Pen-Drive
              Foundation with appropriate rights.
            </p>
            <p>
              Content should not be copied, reproduced, modified, distributed
              or commercially used without appropriate permission.
            </p>
          </div>

          <div>
            <h2>6. Donations</h2>
            <p>
              Where donation facilities are available on the website, users
              should provide accurate information while making a donation.
              Donations are intended to support the charitable and social
              welfare activities of Pen-Drive Foundation.
            </p>
            <p>
              Any payment or donation transaction may also be subject to the
              terms and policies of the applicable payment service provider.
            </p>
          </div>

          <div>
            <h2>7. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or
              services. These links may be provided for convenience or
              additional information.
            </p>
            <p>
              Pen-Drive Foundation is not responsible for the content,
              availability, privacy practices or policies of third-party
              websites.
            </p>
          </div>

          <div>
            <h2>8. User Submissions</h2>
            <p>
              If you submit information through forms, contact requests or
              other communication channels on this website, you agree to
              provide accurate and appropriate information.
            </p>
            <p>
              Please do not submit confidential, unlawful or sensitive
              information unless it is specifically requested for the relevant
              purpose.
            </p>
          </div>

          <div>
            <h2>9. Disclaimer</h2>
            <p>
              The website and its content are provided on an “as available”
              basis. Pen-Drive Foundation does not guarantee uninterrupted
              availability of the website or that the website will always be
              free from technical issues.
            </p>
          </div>

          <div>
            <h2>10. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Pen-Drive Foundation
              shall not be responsible for any direct or indirect loss arising
              from the use of, or inability to use, this website or its
              content.
            </p>
          </div>

          <div>
            <h2>11. Privacy</h2>
            <p>
              Your use of this website may involve the collection and
              processing of certain information. Please refer to our{' '}
              <Link
                to="/privacy-policy"
                className="font-semibold text-[#315C42] underline"
              >
                Privacy Policy
              </Link>{' '}
              for information about how such information may be handled.
            </p>
          </div>

          <div>
            <h2>12. Changes to These Terms</h2>
            <p>
              Pen-Drive Foundation may update or modify these Terms & Conditions
              from time to time. Any updated version will be published on this
              page with the revised date.
            </p>
          </div>

          <div>
            <h2>13. Governing Law</h2>
            <p>
              These Terms & Conditions shall be interpreted in accordance with
              applicable laws of India. Any matter arising in connection with
              the use of this website shall be subject to the applicable
              jurisdiction.
            </p>
          </div>

          <div>
            <h2>14. Contact Us</h2>

            <div className="mt-5 rounded-2xl bg-[#F4F8F4] p-6">
              <p className="font-semibold text-[#17251E]">
                Pen-Drive Foundation
              </p>

              <p className="mt-2">
                Cheta-I, P.O./P.S. Roing,
                <br />
                Lower Dibang Valley,
                <br />
                Arunachal Pradesh - 792110
              </p>

              <p className="mt-3">
                Email:{' '}
                <a
                  href="mailto:pendrivefoundation@gmail.com"
                  className="font-medium text-[#315C42] hover:underline"
                >
                  pendrivefoundation@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-[#D8E4DB] pt-6">
            <p className="text-sm text-[#68766E]">
              Last Updated: October 2026
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}