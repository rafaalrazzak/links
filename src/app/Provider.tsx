"use client";

import { getClient } from "@/graphcms/client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={getClient()}>{children}</ApolloProvider>;
}
