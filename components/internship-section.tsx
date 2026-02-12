"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin, Globe } from "lucide-react"

export function InternshipSection() {
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
    <section id="internship" ref={sectionRef} className="py-24 px-6">
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-center text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-primary">Internship</span> Experience
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
            {/* Accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-primary" />

            <div className="pl-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Web Development Intern</h3>
                  <p className="text-sm font-medium text-primary">Amico Company</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  Nagercoil
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  Web Development
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Gained hands-on experience in web development, working on real-world projects that
                strengthened my skills in building responsive and user-friendly web applications.
                Collaborated with the team to develop and optimize frontend interfaces while learning
                industry best practices.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Responsive Design"].map((tag) => (
                  <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
