import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
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
