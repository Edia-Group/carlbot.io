import { createFileRoute } from "@tanstack/react-router";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { WhyLeadBotCta } from "@/components/cta/WhyLeadbotCta";
import { BuildingsGradientIcon } from "@/features/about/BuildingsGradientIcon";
import { HeartGradientIcon } from "@/features/about/HeartGradientIcon";
import { MessageSquareGradientIcon } from "@/features/about/MessageSquareGradientIcon";
import { ZapGradientIcon } from "@/features/about/ZapGradientIcon";
import { createMetaTags } from "@/lib/createMetaTags";

export const Route = createFileRoute("/_layout/about")({
  head: () => ({
    meta: createMetaTags({
      title: "Chi Siamo | LeadBot",
      description:
        "LeadBot aiuta professionisti e agenzie italiane a generare più lead qualificati e automatizzare la gestione appuntamenti con chatbot intelligenti.",
      imagePath: "/images/default-og.png",
      path: "/about",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ContentPageWrapper>
      <div className="max-w-3xl mx-auto gap-16 flex flex-col">
        <h1>Buone conversazioni, buoni rapporti</h1>
        <div className="flex flex-col gap-10 font-display text-3xl md:text-justify">
          <p>
            Noi di LeadBot crediamo che{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-30%">
              <MessageSquareGradientIcon className="size-6 inline-flex group-hover:motion-preset-seesaw-lg" />{" "}
              ottime conversazioni
            </span>{" "}
            costruiscano relazioni solide.
          </p>
          <p>
            Ogni giorno, le persone chattano con amici, colleghi e familiari su
            WhatsApp perché è naturale e immediato. <br />I professionisti
            dovrebbero sfruttare questa stessa dinamica: dove{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-20%">
              <HeartGradientIcon className="size-6 inline-flex group-hover:motion-preset-pulse-lg" />{" "}
              le persone chattano
            </span>
            , i tassi di conversione crescono.
          </p>
          <p>
            Molti chatbot oggi si limitano al supporto base, ma sappiamo che
            possono fare molto di più. Li vediamo come strumenti per{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-50%">
              <ZapGradientIcon className="size-6 inline-flex group-hover:motion-preset-oscillate-lg" />{" "}
              interazioni significative
            </span>{" "}
            che vanno oltre le risposte scriptate. La nostra missione è
            trasformare chat fredde in conversazioni coinvolgenti per il tuo
            brand.
          </p>
          <p>
            LeadBot{" "}
            <span className="group font-medium bg-clip-text text-transparent bg-linear-to-r from-[#c13eaa] to-[#ff491f] to-70%">
              <BuildingsGradientIcon className="size-6 inline-flex group-hover:motion-preset-bounce" />{" "}
              aiuta professionisti
            </span>{" "}
            a creare esperienze personalizzate che generano connessioni più
            profonde.
          </p>
          <p>
            Siamo un team italiano appassionato di user experience e
            automazione.
          </p>
          <p className="font-bold">
            Abbiamo creato LeadBot per sbloccare il potenziale dei chatbot e
            renderli intuitivi, efficaci e pensati per il mercato italiano.
          </p>
          <p>Inizia a convertire!</p>
        </div>
      </div>
      <WhyLeadBotCta />
    </ContentPageWrapper>
  );
}
