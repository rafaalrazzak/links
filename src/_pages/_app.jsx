import "@/css/globals.css";
import client from "@/graphcms/client";
import LinksProvider from "@/context/links";

import { ApolloProvider } from "@apollo/client";
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <LinksProvider>
        <Component {...pageProps} />
      </LinksProvider>
    </ApolloProvider>
  );
}
