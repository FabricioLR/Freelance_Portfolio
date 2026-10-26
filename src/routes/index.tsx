import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { PORTFOLIO_URL, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Freelance Web Developer in Brasília | Fabrício Longo" },
      { name: "description", content: "Websites, n8n & AI automation, server setup and ongoing support for small businesses in Brasília." },
      { property: "og:title", content: "Freelance Web Developer in Brasília | Fabrício Longo" },
      { property: "og:description", content: "Websites, automation, cloud setup and support for small businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { tag: "01", title: "Websites & web apps", text: "Landing pages, business sites, booking systems and custom dashboards built with Laravel, Angular and PostgreSQL.", items: ["Business & landing pages", "Online scheduling / catalogs", "Admin panels & internal systems"] },
  { tag: "02", title: "n8n & AI automation", text: "Stop doing repetitive work by hand. I connect your tools and let AI handle the boring parts.", items: ["WhatsApp bots & auto-replies", "Reports and reminders sent automatically", "Integrations between apps & APIs"] },
  { tag: "03", title: "Server & cloud setup", text: "Reliable hosting on AWS, Oracle Cloud or your own servers, with Docker, backups and monitoring.", items: ["Domain, email & hosting setup", "Docker deploys & CI/CD", "Monitoring, VPN & network"] },
  { tag: "04", title: "Maintenance & support", text: "Keep your site and systems healthy. Fixes, updates and improvements — including old PHP projects.", items: ["Bug fixes & legacy PHP", "Security updates & backups", "Monthly support plans"] },
];

const steps = [
  { n: "1", t: "Chat", d: "Tell me about your business on WhatsApp or email." },
  { n: "2", t: "Proposal", d: "I send a clear scope, timeline and quote." },
  { n: "3", t: "Build", d: "Regular updates so you see progress every week." },
  { n: "4", t: "Launch & support", d: "Go live, and I stay around for adjustments." },
];

function Index() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines" aria-hidden />
        <div className="absolute inset-0 bg-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <p className="font-mono text-sm text-primary">// available for freelance projects</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            Tech that makes your small business <span className="text-primary">run itself.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm Fabrício, a software developer in Brasília. I build websites, automate repetitive tasks and keep your servers running — so you can focus on your customers.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Talk on WhatsApp</a>
            <Link to="/contact" className="rounded-full border px-6 py-3 font-semibold hover:bg-secondary">Other ways to contact</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">What I can do for you</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
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
          <h2 className="text-3xl font-bold sm:text-4xl">How we'll work together</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
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
        <h2 className="text-3xl font-bold sm:text-4xl">Why work with me</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Full-stack + infra", "From the website to the server it runs on — one person, no handoffs."],
            ["Local & close", "Based in Brasília. Same timezone, same language, quick replies."],
            ["Real projects", "WhatsApp news bot, cloud storage platform, Grafana cost plugin and more."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block font-semibold text-primary hover:underline">See my portfolio →</a>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-extrabold sm:text-5xl">Have an idea or a problem?</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-80">Send me a message. The first conversation is free and I'll tell you honestly what makes sense for your business.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 font-semibold text-primary hover:opacity-90">Contact me</Link>
        </div>
      </section>
    </SiteShell>
  );
}
