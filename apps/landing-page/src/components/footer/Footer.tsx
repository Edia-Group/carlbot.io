import { LeadBotLogoFull } from "@/components/LeadBotLogo";
import { TextLink } from "@/components/link";
import { docsUrl, githubRepoUrl, linkedInUrl } from "../../constants";
import gradientSeparatorSrc from "./assets/gradient-separator.png";

const data = [
  {
    title: "Prodotto",
    links: [
      {
        label: "Documentazione",
        href: docsUrl,
      },
      {
        label: "Prezzi",
        to: "/pricing",
      },
      {
        label: "Template",
        to: "/templates",
      },
    ],
  },
  {
    title: "Risorse",
    links: [
      {
        label: "Blog",
        to: "/blog",
      },
      {
        label: "LinkedIn",
        href: linkedInUrl,
      },
    ],
  },
  {
    title: "Blog",
    links: [
      {
        label: "Chatbot per Generazione Lead",
        to: "/blog/$slug",
        params: {
          slug: "lead-generation-chatbot",
        },
      },
      {
        label: "Miglior Chatbot Builder",
        to: "/blog/$slug",
        params: {
          slug: "best-chatbot-builder",
        },
      },
      {
        label: "Creare Chatbot WhatsApp",
        to: "/blog/$slug",
        params: {
          slug: "create-whatsapp-chatbot",
        },
      },
      {
        label: "Chatbot per FAQ",
        to: "/blog/$slug",
        params: {
          slug: "faq-chatbot",
        },
      },
      {
        label: "Alternativa a Landbot",
        to: "/blog/$slug",
        params: {
          slug: "landbot-alternative",
        },
      },
    ],
  },
  {
    title: "Azienda",
    links: [
      {
        label: "Chi siamo",
        to: "/about",
      },
      {
        label: "Termini di Servizio",
        to: "/$slug",
        params: {
          slug: "terms-of-service",
        },
      },
      {
        label: "Privacy Policy",
        to: "/$slug",
        params: {
          slug: "privacy-policy",
        },
      },
      {
        label: "Business Continuity",
        to: "/$slug",
        params: {
          slug: "business-continuity",
        },
      },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer className="dark flex flex-col pb-12">
      <img src={gradientSeparatorSrc} alt="separator" className="w-full h-2" />
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-4 w-full">
        <div className="flex flex-col md:flex-row gap-12 py-12 items-start">
          <LeadBotLogoFull className="mt-1" />
          <div className="flex flex-col md:flex-row gap-8 md:justify-around w-full">
            {data.map((item) => (
              <div className="flex flex-col gap-3" key={item.title}>
                <h3 className="text-2xl">{item.title}</h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <TextLink
                        href={"href" in link ? link.href : undefined}
                        to={"to" in link ? link.to : undefined}
                        params={"params" in link ? link.params : undefined}
                        target={"href" in link ? "_blank" : undefined}
                        className="text-muted-foreground font-normal"
                        size="sm"
                      >
                        {link.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-foreground/70 text-sm">
          Tutti i diritti riservati 2026 - Leadbot.it
        </p>
      </div>
    </footer>
  );
};
