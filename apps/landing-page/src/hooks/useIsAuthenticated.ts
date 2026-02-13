import { getTypebotCookie } from "@typebot.io/telemetry/cookies/helpers";
import { useEffect, useState } from "react";

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const LeadbotCookie = getTypebotCookie(document.cookie);
    if (LeadbotCookie?.lastProvider || LeadbotCookie?.landingPage?.isMerged)
      setIsAuthenticated(true);
  }, []);

  return isAuthenticated;
};
