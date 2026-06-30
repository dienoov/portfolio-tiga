"use client";

export default function SkillsMarquee() {
  const skills: string[] = [
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Laravel",
    "Express.js",
    "Tailwind CSS",
    "GSAP",
  ];

  const randomizeSkills = (): void => {
    skills.forEach((skill: string, i: number) => {
      const j: number = Math.floor(Math.random() * (i + 1));
      [skills[i], skills[j]] = [skills[j], skills[i]];
    });
  };
  randomizeSkills();

  return (
    <div className="flex gap-4 text-9xl font-black text-nowrap uppercase opacity-10">
      <ul className="flex gap-4">
        {skills.map((skill: string) => (
          <li key={skill} suppressHydrationWarning>
            {skill}
          </li>
        ))}
      </ul>
      <ul className="flex gap-4">
        {skills.map((skill: string) => (
          <li key={skill} suppressHydrationWarning>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
