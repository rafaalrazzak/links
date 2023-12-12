import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import React from "react";

export function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <Script
        async
        src="https://eu.umami.is/script.js"
        data-website-id="b5c46f7a-822f-4c52-9fbf-c9e8e6af7d39"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HYQZKBBH94"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-HYQZKBBH94');
        `}
      </Script>
    </>
  );
}
