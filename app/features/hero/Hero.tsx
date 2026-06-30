"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import dynamic from "next/dynamic";

const SkillsMarquee = dynamic(
  () => import("@/app/features/hero/SkillsMarquee")
);

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headingRef.current || !marqueeRef.current) {
      return;
    }

    const tl = gsap.timeline({});

    const headingChars = SplitText.create(headingRef.current, {
      type: "words,chars",
      mask: "chars",
      autoSplit: true,
    });

    tl.from(headingChars.chars, {
      yPercent: 110,
      stagger: 0.025,
      duration: 0.8,
      ease: "power4.out",
    });

    tl.from(marqueeRef.current, {
      opacity: 0,
      duration: 1,
      filter: "blur(4px)",
    });

    if (!marqueeRef.current.firstChild?.firstChild) {
      return;
    }

    const marqueeTextWidth: number =
      marqueeRef.current.querySelector("ul")?.getBoundingClientRect().width ??
      0;

    gsap.to(marqueeRef.current.children, {
      x: -marqueeTextWidth - 16,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="relative grid min-h-screen place-content-center">
      <h1
        className="text-center text-5xl font-black uppercase"
        ref={headingRef}
      >
        Full-Stack Developer
      </h1>
      <div
        className="absolute top-1/2 left-1/2 w-full -translate-1/2 overflow-clip"
        aria-hidden
        ref={marqueeRef}
      >
        <SkillsMarquee />
        <SkillsMarquee />
        <SkillsMarquee />
        <SkillsMarquee />
        <SkillsMarquee />
        <SkillsMarquee />
      </div>
    </section>
  );
}
