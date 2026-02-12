"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-center text-3xl font-bold text-foreground md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        <p className="mt-6 text-center text-muted-foreground">
          {"I'd"} love to hear from you. Feel free to reach out!
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</p>
                <a href="mailto:sneha.a.sneha2005@gmail.com" className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary transition-colors">sneha.a.sneha2005@gmail.com</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <a href="https://linkedin.com/in/sneha-a" target="_blank" rel="noopener noreferrer" className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary transition-colors">linkedin.com/in/sneha-a</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:scale-110">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">GitHub</p>
                <a href="https://github.com/snehaasneha2005" target="_blank" rel="noopener noreferrer" className="mt-0.5 block text-sm font-medium text-foreground hover:text-primary transition-colors">github.com/snehaasneha2005</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
