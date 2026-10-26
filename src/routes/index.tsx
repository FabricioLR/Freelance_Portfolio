import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PORTFOLIO_URL, whatsappLink } from "@/lib/contact";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freelance Web Developer in Brasília | FabricioLR" },
      { name: "description", content: "Websites, n8n & AI automation, server setup and ongoing support for small businesses in Brasília." },
      { property: "og:title", content: "Freelance Web Developer in Brasília | FabricioLR" },
      { property: "og:description", content: "Websites, automation, cloud setup and support for small businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const content = {
  en: {
    available: "// available for freelance projects",
    h1a: "Tech that makes your business",
    h1b: "run itself.",
    heroP: "I'm Fabrício, a software developer in Brasília. I build websites, automate repetitive tasks and keep your servers running — so you can focus on your customers.",
    wa: "Talk on WhatsApp",
    other: "Other ways to contact",
    waMessage: "Hi Fabrício! I'd like to talk about a project.",
    servicesTitle: "What I can do for you",
    services: [
      { tag: "01", title: "Websites & web apps", text: "Landing pages, business sites, booking systems and custom dashboards built with Laravel, Angular and PostgreSQL.", items: ["Business & landing pages", "Online scheduling / catalogs", "Admin panels & internal systems"] },
      { tag: "02", title: "n8n & AI automation", text: "Stop doing repetitive work by hand. I connect your tools and let AI handle the boring parts.", items: ["WhatsApp bots & auto-replies", "Reports and reminders sent automatically", "Integrations between apps & APIs"] },
      { tag: "03", title: "Server & cloud setup", text: "Reliable hosting on AWS, Oracle Cloud or your own servers, with Docker, backups and monitoring.", items: ["Domain, email & hosting setup", "Docker deploys & CI/CD", "Monitoring, VPN & network"] },
      { tag: "04", title: "Maintenance & support", text: "Keep your site and systems healthy. Fixes, updates and improvements — including old PHP projects.", items: ["Bug fixes & legacy PHP", "Security updates & backups", "Monthly support plans"] },
    ],
    stepsTitle: "How we'll work together",
    steps: [
      { n: "1", t: "Chat", d: "Tell me about your business on WhatsApp or email." },
      { n: "2", t: "Proposal", d: "I send a clear scope, timeline and quote." },
      { n: "3", t: "Build", d: "Regular updates so you see progress every week." },
      { n: "4", t: "Launch & support", d: "Go live, and I stay around for adjustments." },
    ],
    whyTitle: "Why work with me",
    why: [
      { t: "Full-stack + infra", d: "From the website to the server it runs on — one person, no handoffs." },
      { t: "Local & close", d: "Based in Brasília. Same timezone, same language, quick replies." },
      { t: "Real experience", d: "Software Developer with strong knowledge of architecture, automation and legacy code." },
    ],
    portfolioLink: "See my portfolio →",
    ctaTitle: "Have an idea or a problem?",
    ctaP: "Send me a message. The first conversation is free and I'll tell you honestly what makes sense for your business.",
    ctaBtn: "Contact me",
  },
  pt: {
    available: "// disponível para projetos freelance",
    h1a: "Tecnologia que faz sua empresa",
    h1b: "funcionar sozinha.",
    heroP: "Sou o Fabrício, desenvolvedor de software em Brasília. Crio sites, automatizo tarefas repetitivas e mantenho seus servidores no ar — para você focar nos seus clientes.",
    wa: "Falar no WhatsApp",
    other: "Outras formas de contato",
    waMessage: "Olá Fabrício! Gostaria de conversar sobre um projeto.",
    servicesTitle: "O que posso fazer por você",
    services: [
      { tag: "01", title: "Sites & aplicativos web", text: "Landing pages, sites institucionais, sistemas de agendamento e painéis personalizados com Laravel, Angular e PostgreSQL.", items: ["Páginas institucionais & landing pages", "Agendamento online / catálogos", "Painéis administrativos & sistemas internos"] },
      { tag: "02", title: "Automação com n8n & IA", text: "Pare de fazer trabalho repetitivo à mão. Conecto suas ferramentas e deixo a IA cuidar das partes chatas.", items: ["Bots de WhatsApp & respostas automáticas", "Relatórios e lembretes automáticos", "Integrações entre apps & APIs"] },
      { tag: "03", title: "Servidores & cloud", text: "Hospedagem confiável na AWS, Oracle Cloud ou nos seus próprios servidores, com Docker, backups e monitoramento.", items: ["Configuração de domínio, e-mail & hospedagem", "Deploys com Docker & CI/CD", "Monitoramento, VPN & rede"] },
      { tag: "04", title: "Manutenção & suporte", text: "Mantenha seu site e sistemas saudáveis. Correções, atualizações e melhorias — incluindo projetos PHP antigos.", items: ["Correção de bugs & PHP legado", "Atualizações de segurança & backups", "Planos mensais de suporte"] },
    ],
    stepsTitle: "Como vamos trabalhar juntos",
    steps: [
      { n: "1", t: "Conversa", d: "Me conte sobre seu negócio no WhatsApp ou por e-mail." },
      { n: "2", t: "Proposta", d: "Envio escopo, prazo e orçamento claros." },
      { n: "3", t: "Desenvolvimento", d: "Acompanhamento constante para você ver o progresso toda semana." },
      { n: "4", t: "Lançamento & suporte", d: "Entrar no ar, e eu continuo por perto para ajustes." },
    ],
    whyTitle: "Por que trabalhar comigo",
    why: [
      { t: "Full-stack + infraestrutura", d: "Do site ao servidor onde ele roda — uma só pessoa, sem repasses." },
      { t: "Local & próximo", d: "Baseado em Brasília. Mesmo fuso, mesmo idioma, respostas rápidas." },
      { t: "Experiência real", d: "Desenvolvedor de Software com forte conhecimento em arquitetura, automação e código legado." },
    ],
    portfolioLink: "Veja meu portfólio →",
    ctaTitle: "Tem uma ideia ou um problema?",
    ctaP: "Me envie uma mensagem. A primeira conversa é gratuita e eu te digo com sinceridade o que faz sentido para o seu negócio.",
    ctaBtn: "Fale comigo",
  },
} as const;

function Index() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines" aria-hidden />
        <div className="absolute inset-0 bg-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <p className="font-mono text-sm text-primary">{c.available}</p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] sm:text-7xl">
            {c.h1a} <span className="text-primary">{c.h1b}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.heroP}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={whatsappLink(c.waMessage)} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">{c.wa}</a>
            <Link to="/contact" className="rounded-full border px-6 py-3 font-semibold hover:bg-secondary">{c.other}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">{c.servicesTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {c.services.map((s) => (
            <article key={s.tag} className="group rounded-2xl border bg-card p-8 transition-colors hover:border-primary">
              <span className="font-mono text-sm text-primary">{s.tag}</span>
              <h3 className="mt-3 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary">→</span>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">{c.stepsTitle}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((s) => (
              <div key={s.n}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-mono font-bold text-accent-foreground">{s.n}</div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">{c.whyTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {c.why.map((w) => (
            <div key={w.t} className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold">{w.t}</h3>
              <p className="mt-2 text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
        <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block font-semibold text-primary hover:underline">{c.portfolioLink}</a>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl sm:text-5xl">{c.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">{c.ctaP}</p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 font-semibold text-primary hover:opacity-90">{c.ctaBtn}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
