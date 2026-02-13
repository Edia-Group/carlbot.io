import { Card } from "@/components/Card";
import editorMockupSrc from "./assets/editor-mockup.png";
import publishClickSrc from "./assets/publish-click.png";
import signUpButtonSrc from "./assets/signup-button.png";

const _imagesBasePath = "/images/sections/get-started";

const instructions = [
  {
    image: {
      src: signUpButtonSrc,
      alt: "Un pulsante al centro con l'etichetta 'Iscriviti'",
    },
    title: "Step 1",
    description:
      "Crea il tuo account e scegli il tuo piano: puoi iniziare con una prova gratuita senza rischi",
  },
  {
    image: {
      src: editorMockupSrc,
      alt: "Un mockup dell'interfaccia dell'editor di chatbot",
    },
    title: "Step 2",
    description: "Scegli un template dalla nostra libreria o inizia da zero.",
  },
  {
    image: {
      src: publishClickSrc,
      alt: "Un mouse sopra il pulsante 'Pubblica'",
    },
    title: "Step 3",
    description:
      "Costruisci e testa il tuo bot in tempo reale. Sei pronto? Clicca su pubblica!",
  },
];

export const GetStarted = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2>Inizia subito con LeadBot</h2>
      <div className="flex flex-col md:flex-row max-w-7xl gap-2">
        {instructions.map((instruction) => (
          <InstructionCard
            key={instruction.title}
            image={instruction.image}
            title={instruction.title}
            description={instruction.description}
          />
        ))}
      </div>
    </div>
  );
};

const InstructionCard = ({
  image,
  title,
  description,
}: (typeof instructions)[number]) => {
  return (
    <Card className="flex flex-col items-center gap-6 p-1.5 pb-6">
      <img src={image.src} alt={image.alt} className="rounded-xl" />
      <div className="flex flex-col gap-2 px-3">
        <h3 className="uppercase font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};
