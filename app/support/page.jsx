import { site } from "@/lib/site";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <section className="page shell narrow-page">
      <span className="kicker">Support</span>
      <h1>Help us improve the beta responsibly.</h1>
      <p className="page-lead">
        Report reproducible problems without including passwords, access keys,
        tokens, recovery credentials, or private file contents.
      </p>
      <div className="support-grid">
        <article>
          <h2>Product support</h2>
          <p>Include the app version, Windows version, provider, and exact steps.</p>
          <a className="text-link" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </article>
        <article>
          <h2>Security reports</h2>
          <p>Use a private channel. Do not post exploitable details publicly.</p>
          <a className="text-link" href={`mailto:${site.supportEmail}`}>
            Contact security
          </a>
        </article>
      </div>
    </section>
  );
}
