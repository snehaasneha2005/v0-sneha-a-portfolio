"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python"],
  },
  {
    title: "Programming",
    skills: ["C", "Java"],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-secondary/50">
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-center text-3xl font-bold text-foreground md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="font-heading text-lg font-semibold text-primary">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
