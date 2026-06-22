import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

interface PixieParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  sparkle: boolean;
  rotation: number;
}

const PIXIE_COLORS = [
  "rgba(255, 248, 220, 0.95)",
  "rgba(245, 215, 142, 0.92)",
  "rgba(244, 164, 200, 0.88)",
  "rgba(201, 184, 240, 0.88)",
  "rgba(168, 230, 163, 0.85)",
  "rgba(125, 206, 160, 0.82)",
  "rgba(255, 230, 180, 0.9)",
];

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<PixieParticle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const disabledRef = useRef(false);
  const frameRef = useRef(0);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 600px)").matches;
    if (!isDesktop) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    let hover = false;
    const cursorPos = { x: 0, y: 0 };
    let rafId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (x: number, y: number, intensity = 1) => {
      const count = Math.ceil(2 * intensity);
      for (let i = 0; i < count; i++) {
        if (particles.length > 140) particles.shift();
        particles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -Math.random() * 2 - 0.4,
          life: 0.5 + Math.random() * 0.55,
          maxLife: 0.5 + Math.random() * 0.55,
          size: 1.2 + Math.random() * 3.2,
          color: PIXIE_COLORS[Math.floor(Math.random() * PIXIE_COLORS.length)],
          sparkle: Math.random() > 0.55,
          rotation: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawSparkle = (p: PixieParticle, alpha: number) => {
      const spikes = 4;
      const outer = p.size * 2.2 * alpha;
      const inner = p.size * 0.5 * alpha;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outer : inner;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!disabledRef.current && !hover) {
        const delay = 5;
        cursorPos.x += (mouse.x - cursorPos.x) / delay;
        cursorPos.y += (mouse.y - cursorPos.y) / delay;
        gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y });
      }

      if (!reducedMotion && !disabledRef.current) {
        frameRef.current += 1;
        if (frameRef.current % 2 === 0 && mouse.x > 0) {
          spawnParticles(mouse.x, mouse.y, 1);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life -= 0.018;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          const alpha = p.life / p.maxLife;
          p.x += p.vx;
          p.y += p.vy;
          p.vy -= 0.025;
          p.vx *= 0.98;
          p.rotation += 0.06;

          if (p.sparkle) {
            drawSparkle(p, alpha);
          } else {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 12;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!reducedMotion && !disabledRef.current) {
        spawnParticles(e.clientX, e.clientY, 1.5);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(loop);

    const elements = document.querySelectorAll("[data-cursor]");
    const onMouseOver = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
        if (!reducedMotion) spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
      }
      if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
        disabledRef.current = true;
        particles.length = 0;
      }
    };

    const onMouseOut = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursor === "disable") {
        disabledRef.current = false;
      }
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    elements.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
      item.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      elements.forEach((item) => {
        item.removeEventListener("mouseover", onMouseOver);
        item.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pixie-canvas" aria-hidden="true" />
      <div className="cursor-main" ref={cursorRef}>
        <span className="cursor-wand" />
        <span className="cursor-glow" />
      </div>
    </>
  );
};

export default Cursor;
