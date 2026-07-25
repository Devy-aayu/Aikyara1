import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="cinematic-hero">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="hero-horizon" aria-hidden="true" />
        <div className="shell hero-shell">
          <div className="hero-side-rail" aria-hidden="true">
            <span>AIKYARA / SYSTEMS</span>
            <span>INDIA / 28.6139° N</span>
          </div>

          <div className="hero-copy" data-reveal>
            <div className="mission-meta">
              <span className="signal-pulse" />
              <span>Systems online</span>
              <span>•</span>
              <span>Product ecosystem 2026</span>
            </div>
            <h1>
              <span>Engineering</span>
              <span>digital systems</span>
              <em>for a connected future.</em>
            </h1>
            <p>{site.description}</p>
            <div className="button-row">
              <Link className="button" href="/products">
                Explore the ecosystem <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" href="/services">
                Engineering services
              </Link>
            </div>
          </div>

          <div className="hero-system-visual" data-reveal aria-hidden="true">
            <div className="system-sphere">
              <div className="sphere-grid" />
              <div className="sphere-core">ऐक्य</div>
            </div>
            <div className="trajectory trajectory-a"><span /></div>
            <div className="trajectory trajectory-b"><span /></div>
            <div className="visual-readout readout-a">UNITY / 01</div>
            <div className="visual-readout readout-b">TRUST / 02</div>
            <div className="visual-readout readout-c">PROGRESS / 03</div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span>Scroll to explore</span>
            <i />
          </div>
        </div>
      </section>

      <section className="mission-strip" aria-label="Aikyara company snapshot">
        <div className="shell mission-strip-inner">
          <div><strong>04</strong><span>Product systems</span></div>
          <div><strong>01</strong><span>Live platform</span></div>
          <div><strong>03</strong><span>Core principles</span></div>
          <div className="mission-statement"><span>MISSION</span><strong>Build useful technology people can trust.</strong></div>
        </div>
      </section>

      <section className="section shell systems-section" id="products">
        <div className="section-heading" data-reveal>
          <div>
            <span className="kicker">Aikyara systems</span>
            <h2>One mission. Multiple technologies.</h2>
          </div>
          <Link className="text-link" href="/products">
            View all systems ↗
          </Link>
        </div>
        <div className="product-grid product-grid-cinematic">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="philosophy-section" data-reveal>
        <div className="philosophy-lines" aria-hidden="true" />
        <div className="shell philosophy-inner">
          <div className="philosophy-word" aria-hidden="true">ऐक्य</div>
          <div className="philosophy-copy">
            <span className="kicker">The Aikyara principle</span>
            <h2>Different systems. One useful direction.</h2>
            <p>
              Aikyara is inspired by <strong>Aikya</strong>—unity and harmony.
              We bring software, intelligence, security, and practical utility
              together into products designed to make digital work simpler and safer.
            </p>
          </div>
          <div className="principle-stack">
            <article><span>01</span><strong>Purpose before noise</strong><p>Every feature must solve a real problem.</p></article>
            <article><span>02</span><strong>Trust by architecture</strong><p>Security and clarity begin in the system design.</p></article>
            <article><span>03</span><strong>Progress that lasts</strong><p>Strong foundations over temporary trends.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell service-callout cinematic-callout" data-reveal>
        <div className="callout-coordinate">28°36′N / 77°12′E</div>
        <div>
          <span className="kicker">Aikyara engineering</span>
          <h2>Building a system that cannot afford to feel ordinary?</h2>
          <p>
            We design web platforms, desktop applications, automation systems,
            and security-focused product architecture.
          </p>
        </div>
        <Link className="button" href="/services">
          Start a conversation ↗
        </Link>
      </section>
    </>
  );
}
