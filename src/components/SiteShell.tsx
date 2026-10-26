import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EMAIL, PORTFOLIO_URL, whatsappLink } from "@/lib/contact";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-lg font-bold">
            fabricio<span className="text-primary">.dev</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>Services</Link>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className="hidden text-muted-foreground hover:text-foreground sm:inline">Portfolio</a>
            <Link to="/contact" className="rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90">Contact me</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Fabrício Longo · Brasília – DF</span>
          <span className="flex gap-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
          </span>
        </div>
      </footer>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
      </a>
    </div>
  );
}
