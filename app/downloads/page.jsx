export const metadata = { title: "Downloads" };

export default function DownloadsPage() {
  return (
    <section className="page shell" data-reveal>
      <span className="kicker">Official downloads</span>
      <h1>Aikyara release centre.</h1>
      <p className="page-lead">
        Desktop installers and verified release checksums will appear here when
        products complete their public distribution checks.
      </p>
      <article className="download-card" id="downloads" data-reveal>
        <div>
          <span className="status-dot build">In development</span>
          <h2>Cloud Backup for Windows</h2>
          <p>Public installer coming after release and recovery validation.</p>
        </div>
        <div className="download-actions">
          <span className="button button-disabled" aria-disabled="true">Not released yet</span>
        </div>
      </article>
      <div className="notice" data-reveal>
        <strong>Available web product</strong>
        <p>
          Kithub is available now at <a className="text-link" href="https://kithubtools.vercel.app/" target="_blank" rel="noreferrer">kithubtools.vercel.app ↗</a>.
        </p>
      </div>
    </section>
  );
}
