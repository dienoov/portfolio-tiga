"use client";

import dynamic from "next/dynamic";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SkillsMarquee = dynamic(
  () => import("@/app/features/hero/SkillsMarquee")
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !headingRef.current || !marqueeRef.current) {
      return;
    }

    gsap.to(headingRef.current!, {
      yPercent: -75,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });

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

    const skillsMarquee = gsap.utils.toArray<HTMLElement>(
      marqueeRef.current.children
    );

    skillsMarquee.forEach((skill: HTMLElement, i: number) => {
      gsap.fromTo(
        skill,
        {
          x: i % 2 ? -marqueeTextWidth - 16 : 0,
        },
        {
          x: i % 2 ? 0 : -marqueeTextWidth - 16,
          duration: 180,
          repeat: -1,
          ease: "linear",
        }
      );
    });
  }, []);

  return (
    <section
      className="relative grid min-h-svh place-content-center overflow-x-clip"
      ref={containerRef}
    >
      <h1
        className="-skew-3 text-center text-5xl font-black uppercase"
        ref={headingRef}
      >
        Full-Stack Developer
      </h1>
      <div
        className="absolute top-1/2 left-1/2 w-full -translate-1/2 skew-3"
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
