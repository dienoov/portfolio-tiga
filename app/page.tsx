"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import Hero from "@/app/features/hero/Hero";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, useGSAP);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      content: "main",
      smooth: 1,
      effects: true,
    });
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
