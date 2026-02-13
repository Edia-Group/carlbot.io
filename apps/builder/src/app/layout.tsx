import type { Metadata } from "next";
import "@/assets/styles/routerProgressBar.css";
import "@/assets/styles/plate.css";
import "@/assets/styles/resultsTable.css";
import "@/assets/styles/custom.css";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "LeadBot - Chatbot Flow per Professionisti",
  description:
    "Crea chatbot intelligenti per qualificare lead, fissare appuntamenti e gestire follow-up automatici. Pensato per professionisti e agenzie italiane.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function renderRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="font-body text-gray-12 bg-gray-2 dark:bg-gray-1 antialiased">
        {children}
      </body>
    </html>
  );
}
