"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Code, Sparkles } from "lucide-react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-center text-3xl font-bold text-foreground md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

        <p className="mt-10 text-center text-lg leading-relaxed text-muted-foreground">
          {"I'm"} a Computer Science and Engineering student at Government College of Engineering, Bodinayakkanur,
          with a strong passion for building things on the web. I enjoy working on both the frontend and backend,
          turning ideas into clean, functional applications.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">Education</h3>
            <p className="mt-2 text-sm text-muted-foreground">B.E. in Computer Science & Engineering</p>
          </div>
          <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">Focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">Full-Stack Web Development</p>
          </div>
          <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">Passion</h3>
            <p className="mt-2 text-sm text-muted-foreground">Building clean, functional products</p>
          </div>
        </div>
      </div>
    </section>
  )
}
