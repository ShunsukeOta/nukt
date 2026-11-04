"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays visible when JavaScript is off. */
export default function MotionBoot() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.13, rootMargin: "0px 0px -24px 0px" }
    );
    for (const element of elements) {
      // Avoid hiding anything already on screen before the first animation frame.
      if (element.getBoundingClientRect().top <= window.innerHeight * 0.85) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    }
    document.documentElement.classList.add("motion-ready");
    return () => observer.disconnect();
  }, []);

  return null;
}
