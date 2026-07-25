export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <section className="page shell narrow-page">
      <span className="kicker">About Aikyara</span>
      <h1>Many ideas. One future.</h1>
      <p className="page-lead">
        Aikyara is an emerging Indian-rooted technology brand building software
        products and engineering services around digital trust, useful automation,
        productivity, and connected systems.
      </p>
      <div className="prose-panel">
        <h2>The name</h2>
        <p>
          Aikyara is a modern coined brand inspired by the Sanskrit idea of
          <em> Aikya</em>—unity, oneness, and harmony. It represents different
          technologies working together toward one useful future.
        </p>
        <h2>The direction</h2>
        <p>
          The brand is intentionally broad enough to support desktop software,
          cloud utilities, AI systems, private communication, hardware research,
          and professional engineering services.
        </p>
      </div>
    </section>
  );
}
