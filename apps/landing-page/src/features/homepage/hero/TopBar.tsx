import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@typebot.io/ui/lib/cn";
import { LeadBotLogoFull } from "@/components/LeadBotLogo";
import { ButtonLink } from "@/components/link";
import { dashboardUrl } from "@/constants";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

type Props = {
  className?: string;
};

export const TopBar = ({ className }: Props) => {
  const { pathname } = useLocation();
  const isAuthenticated = useIsAuthenticated();

  return (
    <div
      className={cn(
        "bg-transparent flex items-center justify-between flex-1 h-16 max-w-7xl px-4",
        className,
      )}
    >
      <Link to="/">
        <LeadBotLogoFull />
      </Link>
      {pathname === "/" && isAuthenticated && (
        <ButtonLink href={dashboardUrl} variant="outline">
          Vai alla dashboard
        </ButtonLink>
      )}
    </div>
  );
};
