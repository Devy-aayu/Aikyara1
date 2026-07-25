export const metadata = {
  title: "Privacy Policy",
  description: "How Aikyara handles website, support, download, and product-related data.",
};

export default function PrivacyPage() {
  return (
    <section className="page shell narrow-page" data-reveal>
      <span className="kicker">Legal</span>
      <h1>Privacy policy</h1>
      <p className="page-lead">Last updated: 24 July 2026</p>

      <div className="notice legal-notice">
        <strong>Plain-language commitment</strong>
        <p>
          Aikyara aims to collect only the information required to operate its
          website, provide support, distribute products, protect its systems,
          and improve user experience.
        </p>
      </div>

      <div className="prose-panel legal-copy" data-reveal>
        <h2>1. Information we may collect</h2>
        <p>
          When you browse the website, contact support, request a service, join
          a beta, or download a product, we may receive information such as your
          name, email address, messages, product version, operating-system
          version, and technical details you voluntarily provide for diagnosis.
        </p>

        <h2>2. Website and analytics data</h2>
        <p>
          Hosting and security providers may process basic request information,
          including IP address, browser type, requested pages, timestamps, and
          security events. Privacy-friendly analytics may be introduced later
          and will be disclosed here before activation.
        </p>

        <h2>3. Product and diagnostic data</h2>
        <p>
          Aikyara products should not transmit file contents, passwords, secret
          keys, recovery credentials, or access tokens as ordinary analytics.
          Diagnostic exports are intended to be user-controlled and should be
          reviewed before being shared with support.
        </p>

        <h2>4. How information is used</h2>
        <ul>
          <li>To provide downloads, documentation, support, and requested services.</li>
          <li>To investigate bugs, abuse, outages, and security incidents.</li>
          <li>To maintain product reliability and communicate important updates.</li>
          <li>To comply with legal obligations and enforce applicable terms.</li>
        </ul>

        <h2>5. Sharing and processors</h2>
        <p>
          Information may be processed by infrastructure, hosting, email,
          security, payment, or application-distribution providers when needed
          to operate Aikyara. Aikyara does not intend to sell personal data.
        </p>

        <h2>6. Retention and security</h2>
        <p>
          Information is retained only for as long as reasonably necessary for
          its stated purpose, support history, security, dispute resolution, or
          legal compliance. No system is perfectly secure, but access controls,
          encryption where appropriate, and data minimisation should be used.
        </p>

        <h2>7. Your choices</h2>
        <p>
          You may request access, correction, or deletion of personal
          information held by Aikyara, subject to identity verification and
          applicable legal requirements. You may also choose not to provide
          optional diagnostic or feedback information.
        </p>

        <h2>8. External services</h2>
        <p>
          Product pages may link to third-party services such as Kithub,
          Microsoft Store, cloud providers, or distribution platforms. Their
          own privacy terms apply when you use those services.
        </p>

        <h2>9. Children</h2>
        <p>
          Aikyara services are not designed to knowingly collect unnecessary
          personal information from children. A parent or guardian should
          contact Aikyara if they believe such information has been submitted.
        </p>

        <h2>10. Policy changes</h2>
        <p>
          This policy may be updated as products, hosting, analytics, payment,
          and support systems develop. Material changes will be reflected by the
          updated date on this page.
        </p>

        <h2>11. Contact</h2>
        <p>
          Privacy requests can be sent to the support address published on the
          Aikyara support page. Replace placeholder contact details before the
          public production launch.
        </p>
      </div>
    </section>
  );
}
