import splitbee from "@splitbee/web"
import "@/css/globals.css";
import client from "@/graphcms/client";

import { ApolloProvider } from "@apollo/client";
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
