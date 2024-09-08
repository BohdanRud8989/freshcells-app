import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import { app } from "./config";

import "./App.less";

const apolloClient = new ApolloClient({
  uri: app.apiUrl,
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
    ,
  </StrictMode>,
);
