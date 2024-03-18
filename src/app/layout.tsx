import "@/css/globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import clsx from "clsx";

import { siteMetadata } from "@/data/siteMetadata";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";

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
          "mx-auto flex min-h-screen max-w-xl flex-col items-center gap-12 p-4 md:gap-8 ",
          inter.className,
        )}
      >
        <Toaster />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
