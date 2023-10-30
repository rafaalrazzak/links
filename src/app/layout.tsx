import "@/css/globals.css";

import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { siteMetadata } from "@/data/siteMetadata";
import Layout from "@/components/Layout";
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
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
      <Analytics />
    </html>
  );
}
