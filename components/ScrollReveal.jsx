"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observed = new Set();

    const updateScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    const revealImmediately = (element) => element.classList.add("is-visible");

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    if (reduced || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(revealImmediately);
      return () => {
        window.removeEventListener("scroll", updateScrollProgress);
        window.removeEventListener("resize", updateScrollProgress);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealImmediately(entry.target);
          observer.unobserve(entry.target);
          observed.delete(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
    );

    const observeElements = (scope = document) => {
      const elements = scope.matches?.("[data-reveal]")
        ? [scope, ...scope.querySelectorAll("[data-reveal]")]
        : Array.from(scope.querySelectorAll("[data-reveal]"));

      elements.forEach((element) => {
        if (element.classList.contains("is-visible") || observed.has(element)) return;
        observed.add(element);
        observer.observe(element);
      });
    };

    const animationFrame = window.requestAnimationFrame(() => observeElements());
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      mutationObserver.disconnect();
      observer.disconnect();
      observed.clear();
    };
  }, [pathname]);

  return null;
}
