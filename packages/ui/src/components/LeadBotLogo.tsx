import type React from "react";

export const LeadBotLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="20" fill="#0042DA" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="40"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      LB
    </text>
  </svg>
);
