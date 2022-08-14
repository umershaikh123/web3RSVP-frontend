import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://thegraph.com/hosted-service/subgraph/umershaikh123/main-wweb3-subgraph",
  cache: new InMemoryCache(),
});

export default client;
