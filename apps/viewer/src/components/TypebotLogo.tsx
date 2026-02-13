import type React from "react";

export const TypebotLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="40" height="40" rx="8" fill="#0042DA" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      LB
    </text>
  </svg>
);
