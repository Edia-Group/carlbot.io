import { isDefined, isNotDefined } from "@typebot.io/lib/utils";
import { Button } from "@typebot.io/ui/components/Button";
import { Cancel01Icon } from "@typebot.io/ui/icons/Cancel01Icon";
import { PlusSignIcon } from "@typebot.io/ui/icons/PlusSignIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import { cx } from "@typebot.io/ui/lib/cva";
import { motion } from "motion/react";
import { useState } from "react";
import { MotionCard } from "@/components/motion-wrappers";
import marketingSrc from "./assets/marketing.png";
import productSrc from "./assets/product.png";
import salesSrc from "./assets/sales.png";
import type { DepartmentCardData } from "./types";

const departments = [
  {
    title: "Marketing",
    sub: "Lascia che il tuo bot guidi la conversazione e trasformi i visitatori in clienti.",
    bulletPoints: [
      {
        main: "Lead scoring",
        sub: "LeadBot pone domande qualificanti assegnando automaticamente una priorità ai nuovi lead.",
      },
      {
        main: "Insight",
        sub: "Quiz coinvolgenti ti aiuteranno a raccogliere email e ottenere informazioni preziose sulle necessità dei clienti.",
      },
      {
        main: "Lead magnet",
        sub: "Offri contenuti di valore in cambio dei dati di contatto per far crescere il tuo database.",
      },
    ],
    image: {
      src: marketingSrc,
      alt: "illustrazione marketing",
    },
  },
  {
    title: "Supporto e Servizio",
    sub: "Fornisci supporto multicanale 24/7 e rendi felici i tuoi clienti.",
    bulletPoints: [
      {
        main: "Supporto clienti",
        sub: "Qualifica le richieste degli utenti e indirizzale verso le risorse giuste o l'operatore corretto.",
      },
      {
        main: "Sondaggi NPS",
        sub: "Raccogli facilmente feedback sulla soddisfazione per migliorare i tuoi servizi.",
      },
      {
        main: "Onboarding clienti",
        sub: "Il tuo bot interagisce immediatamente dopo il primo contatto per guidare i nuovi clienti.",
      },
    ],
    image: {
      src: productSrc,
      alt: "illustrazione prodotto",
    },
  },
  {
    title: "Vendite",
    sub: "Aumenta gli appuntamenti e il tasso di conversione con lead altamente interessati.",
    bulletPoints: [
      {
        main: "Qualificazione prospect",
        sub: "Il tuo bot valuta i lead in base ai tuoi criteri di vendita e risponde alle FAQ 24 ore su 24.",
      },
      {
        main: "Appuntamenti",
        sub: "Automatizza la prenotazione di consulenze o visite immobiliari per semplificare la vita ai tuoi clienti.",
      },
      {
        main: "Nurturing dei lead",
        sub: "Invia follow-up istantanei e comunicazioni automatiche per mantenere i lead caldi fino alla vendita.",
      },
    ],
    image: {
      src: salesSrc,
      alt: "illustrazione vendite",
    },
  },
] as const satisfies DepartmentCardData[];

export const ForEveryDepartment = () => {
  const [openedDepartmentIndex, setOpenedDepartmentIndex] = useState<number>();
  const [lastOpenedDepartmentIndex, setLastOpenedDepartmentIndex] = useState<
    number | undefined
  >();

  const openedDepartment = isDefined(openedDepartmentIndex)
    ? departments[openedDepartmentIndex]
    : undefined;

  return (
    <>
      <div className="w-full gap-12 flex flex-col max-w-7xl">
        <div className="flex flex-col gap-4">
          <h2>Progettato per ogni esigenza</h2>
          <p className="text-gray-11 font-normal">
            Automatizza le conversazioni durante l'intero percorso del tuo
            cliente.
          </p>
        </div>
        <div className="flex isolate flex-col gap-4 md:gap-6 md:flex-row">
          {departments.map((department, index) => (
            <DepartmentCard
              key={department.title}
              department={department}
              index={index}
              onClick={() => {
                setOpenedDepartmentIndex(index);
              }}
              openedDepartmentIndex={openedDepartmentIndex}
              lastOpenedDepartmentIndex={lastOpenedDepartmentIndex}
            />
          ))}
        </div>
      </div>
      {openedDepartment && (
        <div className="fixed size-full inset-0 flex justify-center items-center">
          <div
            className="bg-background/80 absolute inset-0 animate-in fade-in duration-350"
            onClick={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
          <OpenedDepartmentCard
            className="absolute"
            department={openedDepartment}
            index={openedDepartmentIndex as number}
            onClose={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
        </div>
      )}
    </>
  );
};

const DepartmentCard = ({
  department,
  index,
  onClick,
  openedDepartmentIndex,
  lastOpenedDepartmentIndex,
}: {
  department: DepartmentCardData;
  lastOpenedDepartmentIndex: number | undefined;
  index: number;
  onClick: () => void;
  openedDepartmentIndex: number | undefined;
  className?: string;
}) => (
  <MotionCard
    layoutId={`dep-${index}`}
    className={cx(
      "p-2 relative isolate cursor-pointer hover:brightness-110 transition-[filter] duration-350",
      lastOpenedDepartmentIndex === index &&
        isNotDefined(openedDepartmentIndex) &&
        "z-10",
    )}
    onClick={() => {
      if (isDefined(openedDepartmentIndex)) return;
      onClick();
    }}
  >
    <motion.figure layoutId={`dep-${index}-img`}>
      <img
        src={department.image.src}
        alt={department.image.alt}
        width="1035px"
        height="495px"
      />
    </motion.figure>
    <div className="flex flex-col px-2 pb-4 gap-3">
      <motion.h2
        layoutId={`dep-${index}-heading`}
        className="text-3xl font-medium"
        layout="position"
      >
        {department.title}
      </motion.h2>
      <motion.p
        layoutId={`dep-${index}-desc`}
        className="pr-10"
        layout="position"
      >
        {department.sub}
      </motion.p>
    </div>
    {openedDepartmentIndex !== index && (
      <Button
        aria-label="Expand department"
        variant="outline"
        size="icon"
        className="rounded-full p-0 w-6 h-6 absolute bottom-4 right-4"
      >
        <PlusSignIcon />
      </Button>
    )}
  </MotionCard>
);

const OpenedDepartmentCard = ({
  department,
  index,
  className,
  onClose,
}: {
  department: DepartmentCardData;
  index: number;
  className?: string;
  onClose: () => void;
}) => (
  <MotionCard
    className={cn("mx-4 p-2 max-w-xl", className)}
    layoutId={`dep-${index}`}
  >
    <div className="gap-4 flex flex-col">
      <Button
        aria-label="Close department"
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 animate-in slide-in-from-bottom-10 fade-in duration-350 delay-500 fill-mode-both"
        onClick={onClose}
      >
        <Cancel01Icon />
      </Button>
      <motion.figure layoutId={`dep-${index}-img`}>
        <img
          src={department.image.src}
          alt={department.image.alt}
          width="1035px"
          height="495px"
        />
      </motion.figure>
      <div className="flex flex-col gap-8 pb-4 px-2">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="text-3xl font-medium"
            layoutId={`dep-${index}-heading`}
            layout="position"
          >
            {department.title}
          </motion.h2>
          <motion.p layoutId={`dep-${index}-desc`} layout="position">
            {department.sub}
          </motion.p>
        </div>
        <ul className="flex flex-col gap-4 pl-4 list-inside list-disc">
          {department.bulletPoints.map((bulletPoint, _index) => (
            <li
              className="text-md"
              key={`${bulletPoint.main}-${bulletPoint.sub}`}
            >
              <span className="font-medium">{bulletPoint.main}:</span>{" "}
              {bulletPoint.sub}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </MotionCard>
);
