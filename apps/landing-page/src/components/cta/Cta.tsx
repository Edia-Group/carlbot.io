import { cn } from "@typebot.io/ui/lib/cn";
import { registerUrl } from "@/constants";
import { CtaButtonLink } from "../link";
import magicWand from "./assets/magic-wand.png";

export type CtaProps = {
  className?: string;
  children?: React.ReactNode;
  buttonLabel?: string;
  isLogoDisplayed?: boolean;
};
export const Cta = ({
  className,
  children = "Pronto a trasformare il tuo modo di acquisire clienti e far crescere il tuo business?",
  buttonLabel = "Inizia gratis",
  isLogoDisplayed = true,
}: CtaProps) => {
  return (
    <div
      className={cn(
        "dark rounded-2xl flex gap-12 py-12 px-4 items-center max-w-7xl w-full",
        className,
        children ? "flex-col" : "justify-center",
      )}
    >
      {isLogoDisplayed && (
        <img src={magicWand} alt="bacchetta magica" className="size-24" />
      )}
      {children && (
        <h2 className="text-center px-5 text-balance max-w-5xl">{children}</h2>
      )}
      <div
        className={cn(
          "flex flex-col gap-2 px-2",
          children ? "items-center w-full" : undefined,
        )}
      >
        <CtaButtonLink size="lg" href={registerUrl}>
          {buttonLabel}
        </CtaButtonLink>
        <p className="text-muted-foreground text-center">
          Nessuna carta richiesta. Piano gratuito generoso.
        </p>
      </div>
    </div>
  );
};
