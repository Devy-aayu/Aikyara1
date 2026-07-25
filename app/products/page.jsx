import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/site";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <section className="page shell" data-reveal>
      <span className="kicker">Product ecosystem</span>
      <h1>Software designed around real digital work.</h1>
      <p className="page-lead">
        Aikyara develops focused products across backup, utilities, private
        communication, and intelligent automation.
      </p>
      <div className="product-grid page-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} index={products.indexOf(product)} />
        ))}
      </div>
    </section>
  );
}
