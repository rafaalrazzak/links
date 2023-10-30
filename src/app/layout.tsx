import "@/css/globals.css";

import { Metadata } from "next";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { siteMetadata } from "@/data/siteMetadata";
import Layout from "@/components/Layout";

import { Provider } from "./Provider";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
      },
    ],
  },
  icons: [
    {
      url: siteMetadata.icon,
      rel: "icon",
    },
    {
      url: siteMetadata.icon,
      rel: "shortcut icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (true) {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <html lang="en">
      <body>
        {/* <Provider> */}
        <Layout>{children}</Layout>
        {/* </Provider> */}
      </body>
    </html>
  );
}
