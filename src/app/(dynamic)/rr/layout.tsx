import "@/css/globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { siteMetadata } from "@/data/siteMetadata";
import { Analytics } from "@/components/Analytics";
import { Header } from "@/components/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Ramadhan Reflection",
  description:
    "Ramadhan Reflection merujuk pada kegiatan memikirkan kembali atau merefleksi pengalaman",
  openGraph: {
    type: "website",
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: "Ramadhan Reflection",
    description:
      "Ramadhan Reflection merujuk pada kegiatan memikirkan kembali atau merefleksi pengalaman",
    images: [
      {
        url: "https://cdn.kita.blue/rafaar/rr.png",
        width: 1200,
      },
    ],
  },
  icons: [
    {
      url: "https://cdn.kita.blue/rafaar/rr-logo.png",
      rel: "icon",
    },
    {
      url: "https://cdn.kita.blue/rafaar/rr-logo.png",
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
        <Header cover="https://cdn.kita.blue/rafaar/rr.png" />
        <Toaster />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
