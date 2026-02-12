"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary animate-fade-in-up">
          Welcome to my portfolio
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Sneha A
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Computer Science and Engineering Student
        </p>
        <p className="mt-2 text-base text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Passionate about Web Development & Programming
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex animate-bounce text-primary"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
