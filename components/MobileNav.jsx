"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNav({ links }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu-layer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <nav id="mobile-navigation-panel" className="mobile-menu-panel" aria-label="Mobile navigation">
          <div className="mobile-menu-heading">
            <span>AIKYARA / NAVIGATION</span>
            <small>Many ideas. One future.</small>
          </div>
          {links.map(([label, href], index) => (
            <Link key={href} href={href} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
