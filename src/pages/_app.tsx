import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import GlobalStyles from "styles/global";
import { apolloClient } from "graphql/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>NextJS - AnswerAPI - GraphQL</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS, GraphQL, AnswerAPI and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
