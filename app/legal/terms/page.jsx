export const metadata = {
  title: "Terms of Use",
  description: "Terms governing the Aikyara website, products, downloads, betas, and services.",
};

export default function TermsPage() {
  return (
    <section className="page shell narrow-page" data-reveal>
      <span className="kicker">Legal</span>
      <h1>Terms of use</h1>
      <p className="page-lead">Last updated: 24 July 2026</p>

      <div className="notice legal-notice">
        <strong>Important</strong>
        <p>
          Preview, beta, and development products may contain defects. They must
          not be used as the sole protection for important data or as the only
          system supporting critical operations.
        </p>
      </div>

      <div className="prose-panel legal-copy" data-reveal>
        <h2>1. Acceptance</h2>
        <p>
          By accessing the Aikyara website, downloading a product, joining a
          beta, or requesting services, you agree to these terms and any
          product-specific notices presented to you.
        </p>

        <h2>2. Product status</h2>
        <p>
          Product availability labels such as development, coming soon, beta,
          or available may change. Features, integrations, storage providers,
          pricing, and release dates are not guaranteed until formally announced.
        </p>

        <h2>3. Licence and acceptable use</h2>
        <p>
          Unless a separate licence says otherwise, Aikyara grants users a
          limited, revocable, non-exclusive right to use distributed software
          for lawful purposes. Users must not misuse products to violate law,
          interfere with systems, distribute malware, access accounts without
          permission, or infringe intellectual-property rights.
        </p>

        <h2>4. User responsibilities</h2>
        <ul>
          <li>Keep independent copies of important information.</li>
          <li>Protect passwords, cloud credentials, recovery information, and devices.</li>
          <li>Verify restored data before deleting original copies.</li>
          <li>Use only storage accounts and systems you are authorised to access.</li>
        </ul>

        <h2>5. Third-party services</h2>
        <p>
          Aikyara products may connect to hosting platforms, cloud providers,
          app stores, or external websites. Availability and operation of those
          services are controlled by their respective providers and their terms.
        </p>

        <h2>6. Services and proposals</h2>
        <p>
          Software-development, security, automation, and consulting work is
          governed by an agreed proposal, statement of work, payment schedule,
          ownership terms, and support scope. Website descriptions are not a
          binding quotation.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          Aikyara names, branding, website content, designs, and proprietary
          software remain protected by applicable intellectual-property laws.
          Third-party marks belong to their respective owners.
        </p>

        <h2>8. Feedback</h2>
        <p>
          Feedback may be used to improve products without an obligation to
          implement it or compensate the contributor. Do not submit confidential
          information through public feedback channels.
        </p>

        <h2>9. Disclaimers</h2>
        <p>
          To the maximum extent permitted by law, preview software and website
          content are provided on an “as available” basis without guarantees of
          uninterrupted operation, complete security, fitness for a particular
          purpose, or permanent feature availability.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Aikyara will not be
          responsible for indirect, incidental, special, or consequential loss,
          including lost data, lost profits, business interruption, or loss
          caused by third-party services. Mandatory consumer rights remain unaffected.
        </p>

        <h2>11. Suspension and termination</h2>
        <p>
          Access may be restricted when reasonably necessary to address abuse,
          security risk, legal requirements, or threats to users and infrastructure.
        </p>

        <h2>12. Changes</h2>
        <p>
          These terms may evolve as Aikyara launches accounts, paid services,
          subscriptions, stores, and additional products. The updated date will
          identify the current version.
        </p>

        <h2>13. Governing terms</h2>
        <p>
          Before commercial launch, this section must be reviewed and completed
          with the correct legal entity, jurisdiction, dispute process, business
          address, and statutory disclosures.
        </p>
      </div>
    </section>
  );
}
