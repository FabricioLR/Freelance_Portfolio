import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EMAIL, PORTFOLIO_URL, whatsappLink } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

const shell = {
  en: {
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact me",
    email: "Email",
    whatsappAria: "Chat on WhatsApp",
    waMessage: "Hi Fabrício! I'd like to talk about a project.",
    toggleAria: "Switch to Portuguese",
    switchLabel: "PT",
  },
  pt: {
    services: "Serviços",
    portfolio: "Portfólio",
    contact: "Fale comigo",
    email: "E-mail",
    whatsappAria: "Conversar no WhatsApp",
    waMessage: "Olá Fabrício! Gostaria de conversar sobre um projeto.",
    toggleAria: "Mudar para inglês",
    switchLabel: "EN",
  },
} as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const { lang, toggle } = useLang();
  const t = shell[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 sm:flex sm:justify-between sm:gap-6 sm:px-6">
          <Link to="/" className="min-w-0 truncate font-display text-lg font-bold">
            Fabricio<span className="text-muted-foreground">LR</span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 text-sm sm:gap-6">
            <Link to="/" className="hidden text-muted-foreground hover:text-foreground sm:inline" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>{t.services}</Link>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className="hidden text-muted-foreground hover:text-foreground sm:inline">{t.portfolio}</a>
            <button
              type="button"
              onClick={toggle}
              aria-label={t.toggleAria}
              className="shrink-0 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {t.switchLabel}
            </button>
            <Link to="/contact" className="shrink-0 whitespace-nowrap rounded-full bg-primary px-3.5 py-2 font-semibold text-primary-foreground hover:opacity-90 sm:px-4">{t.contact}</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} FabricioLR · Brasília – DF</span>
          <span className="flex gap-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{t.email}</a>
            <a href={whatsappLink(t.waMessage)} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
          </span>
        </div>
      </footer>
      <div className="group fixed bottom-5 right-5 z-30 flex items-center">
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border bg-card px-3.5 py-2 text-xs font-semibold text-card-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block sm:hidden">
          {t.whatsappAria}
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-whatsapp/50 wa-pulse" aria-hidden />
        <a
          href={whatsappLink(t.waMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label={t.whatsappAria}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-whatsapp to-whatsapp/85 text-whatsapp-foreground shadow-lg shadow-whatsapp/40 ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
        </a>
      </div>
    </div>
  );
}
