import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <a
            href="mailto:sneha.a.sneha2005@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/snehaasneha2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sneha-a-3a13272a7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          Crafted with <Heart className="h-4 w-4 fill-primary text-primary" /> by{" "}
          <span className="font-semibold text-foreground">Sneha A</span>
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
