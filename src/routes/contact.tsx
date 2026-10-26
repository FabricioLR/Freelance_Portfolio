import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { EMAIL, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Fabrício | Freelance Developer in Brasília" },
      { name: "description", content: "Message Fabrício on WhatsApp or email to talk about your website, automation or server project." },
      { property: "og:title", content: "Contact Fabrício | Freelance Developer" },
      { property: "og:description", content: "Talk on WhatsApp or email about your next project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const subject = encodeURIComponent("Freelance project");
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-glow" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-mono text-sm text-primary">// let's talk</p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">Contact me</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Tell me what your business needs. I usually reply within a few hours on weekdays.
          </p>
          <div className="mt-12 grid gap-5 text-left sm:grid-cols-2">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="rounded-2xl border bg-card p-8 transition-colors hover:border-whatsapp">
              <span className="font-mono text-sm text-whatsapp">fastest</span>
              <h2 className="mt-2 text-2xl font-bold">WhatsApp</h2>
              <p className="mt-2 text-muted-foreground">Quick chat about your idea or problem.</p>
              <span className="mt-6 inline-block rounded-full bg-whatsapp px-5 py-2 font-semibold text-whatsapp-foreground">Start chat →</span>
            </a>
            <a href={`mailto:${EMAIL}?subject=${subject}`} className="rounded-2xl border bg-card p-8 transition-colors hover:border-primary">
              <span className="font-mono text-sm text-primary">detailed</span>
              <h2 className="mt-2 text-2xl font-bold">Email</h2>
              <p className="mt-2 break-all text-muted-foreground">{EMAIL}</p>
              <span className="mt-6 inline-block rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground">Send email →</span>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
