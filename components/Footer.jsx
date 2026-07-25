import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">
            Indian-rooted technology for trustworthy digital work.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/downloads">Downloads</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/company">About Aikyara</Link>
          <Link href="/support">Support</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Aikyara. All rights reserved.</span>
        <span>Preview brand and website foundation.</span>
      </div>
    </footer>
  );
}
