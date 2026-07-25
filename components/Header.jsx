import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";

const links = [
  ["Products", "/products"],
  ["Services", "/services"],
  ["Company", "/company"],
  ["Support", "/support"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          {links.map(([label, href], index) => (
            <Link key={href} href={href}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <Link className="header-command" href="/products">
          Enter ecosystem <span aria-hidden="true">↗</span>
        </Link>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
