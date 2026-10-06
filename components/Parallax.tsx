"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Drifts its content slightly against the scroll. Give it a sized className. */
export default function Parallax({
  children,
  className = "",
  amount = 7,
}: {
  children: React.ReactNode;
  className?: string;
  /** Travel in percent of the element's height, in each direction. */
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = el?.firstElementChild;
    if (!el || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.fromTo(
      inner,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="relative h-full w-full scale-[1.18] will-change-transform">
        {children}
      </div>
    </div>
  );
}
