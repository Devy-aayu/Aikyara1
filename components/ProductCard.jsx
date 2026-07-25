import Link from "next/link";

export function ProductCard({ product, index = 0 }) {
  const style = { "--reveal-delay": `${Math.min(index, 5) * 80}ms` };

  return (
    <Link
      className={`product-card reveal-card product-card-${product.tone}`}
      href={`/products/${product.slug}`}
      data-reveal
      style={style}
      aria-label={`View information about ${product.name}`}
    >
      <div className="product-card-grid" aria-hidden="true" />
      <div className="product-topline">
        <span className="product-index">{product.code || `SYS-0${index + 1}`}</span>
        <span className={`status-dot ${product.tone}`}>{product.status}</span>
      </div>
      <div className="product-card-content">
        <span className="eyebrow">{product.eyebrow}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="product-card-footer">
        <span className="text-link">{product.action || "View product"}</span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="card-orbit" aria-hidden="true"><span /></div>
    </Link>
  );
}
