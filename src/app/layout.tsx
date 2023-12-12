import "@/css/globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { siteMetadata } from "@/data/siteMetadata";
import { Analytics } from "@/components/Analytics";
import { Layout } from "@/components/Layout";

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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "mx-auto flex h-screen max-w-xl flex-col items-center justify-around p-4 gap-12 md:gap-8",
          inter.className,
        )}
      >
        <Layout>{children}</Layout>
      </body>
      <Analytics />
    </html>
  );
}
