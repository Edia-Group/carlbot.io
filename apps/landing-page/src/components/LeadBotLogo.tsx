import type { SVGProps } from "react";

export const LeadBotLogo = ({
  className,
}: { className?: string } & SVGProps<SVGSVGElement>) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="bg-[#1E40AF] rounded-lg p-1.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  </div>
);

export const LeadBotLogoFull = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="bg-[#1E40AF] rounded-lg p-1.5 shrink-0">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
    <span className="font-bold text-2xl tracking-tight text-[#1E40AF] dark:text-white">
      Leadbot.it
    </span>
  </div>
);
