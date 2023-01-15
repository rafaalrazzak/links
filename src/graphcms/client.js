import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl4vym6031zea01ud6p3e8hs0/master",
  ssrMode: true,
  cache: new InMemoryCache(),

});

export default client;
