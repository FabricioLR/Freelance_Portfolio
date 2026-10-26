import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { EMAIL, whatsappLink } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FabricioLR | Freelance Developer in Brasília" },
      { name: "description", content: "Message Fabrício on WhatsApp or email to talk about your website, automation or server project." },
      { property: "og:title", content: "Contact FabricioLR | Freelance Developer" },
      { property: "og:description", content: "Talk on WhatsApp or email about your next project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const content = {
  en: {
    kicker: "// let's talk",
    title: "Contact me",
    p: "Tell me what your business needs. I usually reply within a few hours on weekdays.",
    fastest: "fastest",
    waP: "Quick chat about your idea or problem.",
    waBtn: "Start chat →",
    waMessage: "Hi Fabrício! I'd like to talk about a project.",
    detailed: "detailed",
    emailBtn: "Send email →",
    subject: "Freelance project",
  },
  pt: {
    kicker: "// vamos conversar",
    title: "Fale comigo",
    p: "Me conte o que seu negócio precisa. Costumo responder em algumas horas nos dias úteis.",
    fastest: "mais rápido",
    waP: "Bate-papo rápido sobre sua ideia ou problema.",
    waBtn: "Iniciar conversa →",
    waMessage: "Olá Fabrício! Gostaria de conversar sobre um projeto.",
    detailed: "mais detalhado",
    emailBtn: "Enviar e-mail →",
    subject: "Projeto freelance",
  },
} as const;

function Contact() {
  const { lang } = useLang();
  const c = content[lang];
  const subject = encodeURIComponent(c.subject);

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-glow" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-mono text-sm text-primary">{c.kicker}</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">{c.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{c.p}</p>
          <div className="mt-12 grid gap-5 text-left sm:grid-cols-2">
            <a href={whatsappLink(c.waMessage)} target="_blank" rel="noreferrer" className="rounded-2xl border bg-card p-8 transition-colors hover:border-whatsapp">
              <span className="font-mono text-sm text-whatsapp">{c.fastest}</span>
              <h2 className="mt-2 text-2xl font-bold">WhatsApp</h2>
              <p className="mt-2 text-muted-foreground">{c.waP}</p>
              <span className="mt-6 inline-block rounded-full bg-whatsapp px-5 py-2 font-semibold text-whatsapp-foreground">{c.waBtn}</span>
            </a>
            <a href={`mailto:${EMAIL}?subject=${subject}`} className="rounded-2xl border bg-card p-8 transition-colors hover:border-primary">
              <span className="font-mono text-sm text-primary">{c.detailed}</span>
              <h2 className="mt-2 text-2xl font-bold">Email</h2>
              <p className="mt-2 break-all text-muted-foreground">{EMAIL}</p>
              <span className="mt-6 inline-block rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">{c.emailBtn}</span>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
