import { env } from "@typebot.io/env";
import { isNotEmpty } from "@typebot.io/lib/utils";
import { defaultSettings } from "@typebot.io/settings/constants";
import type { Settings } from "@typebot.io/settings/schemas";
import Head from "next/head";
import Script from "next/script";
import { gtmHeadSnippet } from "@/lib/google-tag-manager";

type SEOProps = {
  url: string;
  typebotName: string;
  isMatchingViewerUrl?: boolean;
  metadata?: Settings["metadata"];
};

export const SEO = ({
  url,
  typebotName,
  isMatchingViewerUrl,
  metadata: {
    title,
    description,
    favIconUrl,
    imageUrl,
    googleTagManagerId,
    allowIndexing,
  } = {},
}: SEOProps) => (
  <>
    <Head key="seo">
      <title>{title ?? typebotName}</title>
      {isMatchingViewerUrl && allowIndexing !== true ? (
        <meta name="robots" content="noindex" />
      ) : null}
      <link
        rel="icon"
        type={favIconUrl ? "image/png" : "images/svg+xml"}
        href={
          favIconUrl ??
          defaultSettings.metadata.favIconUrl(env.NEXT_PUBLIC_VIEWER_URL[0])
        }
      />
      <meta name="title" content={title ?? typebotName} />
      <meta
        name="description"
        content={
          description ??
          "Build beautiful conversational flows and embed them directly in your applications. Automate your leads and appointments with LeadBot."
        }
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ?? "https://bot.leadbot.it"} />
      <meta property="og:title" content={title ?? typebotName} />
      <meta property="og:site_name" content={title ?? typebotName} />
      <meta
        property="og:description"
        content={
          description ??
          "Build beautiful conversational flows and embed them directly in your applications. Automate your leads and appointments with LeadBot."
        }
      />
      <meta
        property="og:image"
        itemProp="image"
        content={
          imageUrl ??
          defaultSettings.metadata.imageUrl(env.NEXT_PUBLIC_VIEWER_URL[0])
        }
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url ?? "https://bot.leadbot.it"} />
      <meta property="twitter:title" content={title ?? typebotName} />
      <meta
        property="twitter:description"
        content={
          description ??
          "Build beautiful conversational flows and embed them directly in your applications. Automate your leads and appointments with LeadBot."
        }
      />
      <meta
        property="twitter:image"
        content={
          imageUrl ??
          defaultSettings.metadata.imageUrl(env.NEXT_PUBLIC_VIEWER_URL[0])
        }
      />
    </Head>
    {isNotEmpty(googleTagManagerId) && (
      <Script id="google-tag-manager">
        {gtmHeadSnippet(googleTagManagerId)}
      </Script>
    )}
  </>
);
