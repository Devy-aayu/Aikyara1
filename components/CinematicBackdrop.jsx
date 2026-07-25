"use client";

import { useEffect, useRef } from "react";

export function CinematicBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX = 0.5;
    let pointerY = 0.35;

    const stars = Array.from({ length: 110 }, (_, index) => ({
      x: ((index * 67) % 997) / 997,
      y: ((index * 131) % 991) / 991,
      radius: 0.35 + ((index * 17) % 12) / 10,
      alpha: 0.18 + ((index * 23) % 60) / 100,
      speed: 0.00008 + ((index * 29) % 13) / 100000,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event) => {
      pointerX = event.clientX / Math.max(width, 1);
      pointerY = event.clientY / Math.max(height, 1);
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        width * pointerX,
        height * pointerY,
        0,
        width * pointerX,
        height * pointerY,
        Math.max(width, height) * 0.52
      );
      glow.addColorStop(0, "rgba(72, 206, 187, 0.055)");
      glow.addColorStop(0.42, "rgba(41, 114, 148, 0.025)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      stars.forEach((star, index) => {
        const drift = reduced ? 0 : frame * star.speed;
        const x = ((star.x + drift) % 1) * width + (pointerX - 0.5) * (index % 7) * 0.8;
        const y = star.y * height + (pointerY - 0.5) * (index % 5) * 0.5;
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(221, 241, 239, ${star.alpha})`;
        context.fill();
      });

      const lineY = height * 0.72;
      const gradient = context.createLinearGradient(0, lineY, width, lineY);
      gradient.addColorStop(0, "rgba(75, 194, 174, 0)");
      gradient.addColorStop(0.48, "rgba(75, 194, 174, 0.13)");
      gradient.addColorStop(0.52, "rgba(229, 169, 81, 0.12)");
      gradient.addColorStop(1, "rgba(229, 169, 81, 0)");
      context.strokeStyle = gradient;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(0, lineY);
      context.bezierCurveTo(width * 0.28, lineY - 70, width * 0.72, lineY + 50, width, lineY - 20);
      context.stroke();

      frame += 1;
      if (!reduced) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cinematic-canvas" aria-hidden="true" />;
}
