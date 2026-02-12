"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A clean, responsive portfolio website built with modern web technologies to showcase skills and projects.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and a responsive interface.",
    tags: ["Node.js", "JavaScript", "CSS"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A dynamic weather application that fetches live data from an API and displays it with an intuitive, clean UI.",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Student Management System",
    description:
      "A Java-based application for managing student records with features for adding, editing, and searching entries.",
    tags: ["Java", "OOP"],
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-secondary/50">
      <div className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-center text-3xl font-bold text-foreground md:text-4xl">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover:scale-110">
                  <Folder className="h-5 w-5" />
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {tag}
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
