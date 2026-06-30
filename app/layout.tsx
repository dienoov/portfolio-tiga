import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvino Dienova",
  description:
    "Full-Stack Developer specializing in modern web applications, enterprise systems, and responsive user experiences.",
};

gsap.registerPlugin(SplitText);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
