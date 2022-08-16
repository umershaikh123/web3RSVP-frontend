import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://thegraph.com/hosted-service/subgraph/umershaikh123/main-wweb3-subgraph",
  uri: "https://api.thegraph.com/subgraphs/name/umershaikh123/wweb3-subgraph",

  //  https://api.thegraph.com/subgraphs/name/sandyabhi/web3rsvp
  cache: new InMemoryCache(),
});

export default client;
