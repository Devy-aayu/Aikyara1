import { products } from "@/lib/site";

export default function sitemap() {
  const base = "https://example.com";
  const staticPaths = [
    "",
    "/products",
    "/services",
    "/downloads",
    "/company",
    "/support",
    "/legal/privacy",
    "/legal/terms",
  ];

  const productPaths = products.map((product) => `/products/${product.slug}`);

  return [...staticPaths, ...productPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
