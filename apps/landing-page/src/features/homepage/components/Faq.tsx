import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import { TextLink } from "@/components/link";
import { docsUrl } from "../../../constants";

const data = [
  {
    title:
      "Quali sono i piani tariffari e quali funzionalità sono incluse nel piano gratuito?",
    content: (
      <>
        LeadBot offre piani tariffari flessibili per adattarsi a liberi
        professionisti, startup e grandi aziende. Il piano{" "}
        <span className="font-bold">Gratuito</span> include LeadBot illimitati,
        200 chat al mese, integrazioni native, webhook, Javascript e CSS
        personalizzati. <br />
        <br /> Per maggiori dettagli sui nostri piani Starter e Pro, consulta la{" "}
        <TextLink to="/pricing">Pagina dei Prezzi</TextLink>.
      </>
    ),
  },
  {
    title:
      "Quanto è facile integrare LeadBot con i miei sistemi e piattaforme esistenti?",
    content: (
      <>
        Integrare LeadBot con i tuoi sistemi è semplicissimo. Forniamo
        istruzioni chiare passo-passo per guidarti nel processo. LeadBot
        supporta una vasta gamma di piattaforme, tra cui WhatsApp Business
        (fondamentale per il mercato italiano), WordPress, Shopify, Notion,
        Webflow e molte altre.
      </>
    ),
  },
  {
    title:
      "Che tipo di funzionalità di Intelligenza Artificiale offre LeadBot?",
    content: (
      <>
        LeadBot è agnostico rispetto ai fornitori di IA, offrendoti la
        flessibilità di connetterti con qualsiasi provider (come OpenAI o
        Mistral). A differenza dei concorrenti che ti vincolano a sistemi
        proprietari, LeadBot ti dà gli strumenti per integrare i servizi IA che
        preferisci, mantenendo il pieno controllo sui dati e sui costi.
      </>
    ),
  },
  {
    title:
      "Che tipo di supporto e risorse sono disponibili se ho bisogno di aiuto?",
    content: (
      <>
        Se riscontri problemi o hai bisogno di assistenza, LeadBot offre diverse
        opzioni:
        <ol className="list-decimal list-inside flex flex-col gap-6 py-6">
          <li>
            <TextLink href={docsUrl} target="_blank">
              Documentazione
            </TextLink>
            : La nostra documentazione completa è aggiornata regolarmente per
            coprire ogni possibile dubbio. Usa la barra di ricerca per trovare
            rapidamente le informazioni.
          </li>
          <li>
            <span className="font-bold">Supporto Diretto per Abbonati</span>:
            Gli utenti dei piani Starter o Pro possono scriverci direttamente
            tramite il widget di chat all'interno dell'app per ricevere supporto
            prioritario.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Quanto è sicuro LeadBot e come gestite la privacy dei dati?",
    content: (
      <p>
        LeadBot è certificato ISO 27001, a dimostrazione del nostro impegno nel
        mantenere i più alti standard di sicurezza delle informazioni. Il nostro
        principio guida è raccogliere solo i dati necessari per fornirti il
        miglior servizio, nel pieno rispetto del GDPR.
        <br />
        <br />
        Per informazioni dettagliate, consulta la nostra{" "}
        <TextLink to="/$slug" params={{ slug: "privacy-policy" }}>
          privacy policy
        </TextLink>
      </p>
    ),
  },
];

export const Faq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <h2>FAQ</h2>
      <div className="flex flex-col gap-2">
        {data.map(({ title, content }) => (
          <Question key={title} title={title}>
            {content}
          </Question>
        ))}
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="p-4 rounded-xl bg-card text-card-foreground cursor-pointer"
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="font-display font-medium text-2xl flex justify-between list-none md:gap-12">
        {title}
        <span
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "shrink-0 [&_svg]:size-6",
          )}
        >
          {isOpen ? <ArrowUp01Icon className="size-8" /> : <ArrowDown01Icon />}
        </span>
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="my-4" />
        {children}
      </motion.div>
    </details>
  );
};
