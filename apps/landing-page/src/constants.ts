export const breakpoints = {
  md: 768,
};

export const currentBaseUrl = "https://leadbot.it";
export const signinUrl = "https://app.leadbot.it/signin";
export const registerUrl = `https://app.leadbot.it/register`;
export const dashboardUrl = `https://app.leadbot.it/leadbots`;
export const githubRepoUrl = "https://github.com/filipporomani/leadbot";
export const linkedInUrl = "https://www.linkedin.com/company/leadbot";
export const discordUrl = "https://discord.gg/typebot";
export const docsUrl = "https://docs.leadbot.it";
export const howToGetHelpUrl = `${docsUrl}/guides/how-to-get-help`;
export const enterpriseLeadFormUrl = "https://leadbot.it/enterprise-lead-form";

export const legacyRedirects = {
  "/leadbot-lib": "https://unpkg.com/leadbot-js@2.0.21/dist/index.umd.min.js",
  "/leadbot-lib/v2": "https://unpkg.com/leadbot-js@2.1.3/dist/index.umd.min.js",
} as const;
