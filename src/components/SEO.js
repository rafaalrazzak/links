import Head from "next/head";
import siteMetadata from "@/data/siteMetadata";
import { useRouter } from "next/router";
export const PageSeo = ({ title, description }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg" href="/logo-r.svg" />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`}
      />
    </Head>
  );
};
