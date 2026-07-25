import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Product not found" };

  return {
    title: `${product.name} — ${product.status}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <section className="product-detail-hero shell">
        <div className="detail-technical-grid" aria-hidden="true" />
        <div className="product-detail-copy" data-reveal>
          <Link className="back-link" href="/products">
            ← Product systems
          </Link>
          <div className="product-detail-status">
            <span className="system-code">{product.code}</span>
            <span className={`status-dot ${product.tone}`}>{product.status}</span>
          </div>
          <span className="kicker">{product.eyebrow}</span>
          <h1>{product.name}</h1>
          <p className="product-detail-lead">{product.overview}</p>
          <div className="button-row">
            {product.externalUrl ? (
              <a className="button" href={product.externalUrl} target="_blank" rel="noreferrer">
                {product.externalLabel || `Open ${product.name}`} ↗
              </a>
            ) : (
              <Link className="button" href="/support">
                Follow product updates ↗
              </Link>
            )}
            <Link className="button button-ghost" href="/products">
              Explore other systems
            </Link>
          </div>
        </div>

        <aside className="product-stage-panel" data-reveal>
          <div className="stage-radar" aria-hidden="true">
            <i /><i /><i /><span />
          </div>
          <span className="stage-label">System telemetry</span>
          <strong>{product.stage}</strong>
          <dl>
            <div><dt>Availability</dt><dd>{product.availability}</dd></div>
            <div><dt>Platform</dt><dd>{product.platform}</dd></div>
            <div><dt>Stage</dt><dd>{product.status}</dd></div>
            <div><dt>System ID</dt><dd>{product.code}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section shell product-information">
        <div className="section-heading" data-reveal>
          <div>
            <span className="kicker">System capabilities</span>
            <h2>What {product.name} is engineered to deliver.</h2>
          </div>
        </div>
        <div className="product-highlight-grid">
          {product.highlights.map((highlight, index) => (
            <article key={highlight} data-reveal style={{ "--reveal-delay": `${index * 60}ms` }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell product-focus" data-reveal>
        <div>
          <span className="kicker">{product.status}</span>
          <h2>{product.focusTitle}</h2>
          <p>
            This system page remains available throughout development so visitors
            can understand the mission, capabilities, and release stage before launch.
          </p>
        </div>
        <div className="focus-list">
          {product.focusItems.map((item, index) => (
            <div key={item}>
              <span aria-hidden="true">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
