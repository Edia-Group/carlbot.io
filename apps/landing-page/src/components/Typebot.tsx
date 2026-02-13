import { lazy } from "react";

export const Leadbot = lazy(() =>
  import("@typebot.io/react").then((m) => ({ default: m.Standard })),
);
