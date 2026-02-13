import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { useState } from "react";
import threeDButton from "./assets/3d-button.png";

const data = [
  {
    title: "Esperienza di creazione intuitiva",
    content:
      "LeadBot semplifica la creazione di interfacce conversazionali con numerose opzioni di personalizzazione. La nostra soluzione flessibile e scalabile utilizza blocchi di costruzione adattabili a qualsiasi esigenza aziendale. Ogni blocco ha impostazioni predefinite eccellenti, ma ogni piccolo dettaglio può essere configurato per soddisfare i tuoi requisiti.",
  },
  {
    title: "Ampie capacità di messaggistica",
    content:
      "LeadBot va oltre il semplice supporto clienti, offrendo flussi di chat versatili perfetti per quiz, sondaggi, marketing creativo e molto altro. È ideale per la generazione di lead, comunicazioni interne e diverse necessità dipartimentali, rendendolo uno strumento prezioso per tutta la tua organizzazione.",
  },
  {
    title: "Progettato per l'esperienza utente",
    content:
      "Sperimenta una UX di prima classe e interfacce bellissime con LeadBot. Il nostro editor visuale facile da usare ti aiuta a creare conversazioni coinvolgenti e vivaci, rendendo le interazioni fluide e piacevoli.",
  },
  {
    title: "Creato con passione per l'innovazione",
    content:
      "LeadBot è 100% open source, costruito con la passione per dare potere a chi crea. La nostra community attiva condivide bot e funzionalità, contribuendo a un ricco ecosistema di innovazione e collaborazione. Unisciti a noi nel plasmare il futuro degli strumenti conversazionali.",
  },
  {
    title: "Tecnologia in costante evoluzione",
    content:
      "La tecnologia di LeadBot è in costante evoluzione, con aggiornamenti regolari che includono correzioni di bug, nuove funzionalità e miglioramenti delle prestazioni. Ci assicuriamo che la nostra piattaforma rimanga aggiornata e affidabile, offrendoti gli ultimi progressi e la migliore esperienza.",
  },
];

export const ProductPrinciples = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    if (openedIndex === index) return;
    setOpenedIndex(index);
  };

  return (
    <div className="flex flex-col gap-8 max-w-7xl w-full">
      <h2>Ci impegniamo a creare strumenti straordinari</h2>
      <div className="flex md:bg-white rounded-2xl gap-4 p-2 items-start border">
        <div className="flex flex-col gap-2 md:gap-0 md:pl-4 w-full">
          {data.map(({ title, content }, index) => (
            <Principle
              key={title}
              title={title}
              content={content}
              isOpened={index === openedIndex}
              isLastItem={index === data.length - 1}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
        <img
          src={threeDButton}
          alt="Illustrazione di un pulsante in 3D con il logo LeadBot sopra"
          className="max-w-lg md:block hidden"
        />
      </div>
    </div>
  );
};

const Principle = ({
  title,
  content,
  isOpened,
  isLastItem,
  onClick,
}: {
  title: string;
  content: string;
  isOpened: boolean;
  isLastItem: boolean;
  onClick: () => void;
}) => {
  return (
    <details
      className="rounded-xl md:rounded-none md:px-0 bg-white border md:border-0 border-border cursor-pointer"
      open={isOpened}
    >
      <summary
        className="px-4 py-4 md:py-2 font-display font-medium text-2xl flex flex-col gap-3 list-none"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        <div className="flex justify-between">
          {title}
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "shrink-0 [&_svg]:size-6",
            )}
          >
            {isOpened ? (
              <ArrowUp01Icon className="size-8" />
            ) : (
              <ArrowDown01Icon />
            )}
          </span>
        </div>

        {isLastItem ? null : <hr className="hidden md:block" />}
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpened ? "auto" : 0,
          opacity: isOpened ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="mb-4 md:hidden mx-4 border-border" />
        <p className="pb-4 mx-4">{content}</p>
      </motion.div>
    </details>
  );
};
