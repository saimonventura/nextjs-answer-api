import React, { FC } from "react";
import { InternationalizationProvider } from "./InternationalizationContext";
import { apolloClient } from "graphql/client";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import Internationalization from "components/Internationalization";

const AppProvider: FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <InternationalizationProvider>
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
        <Internationalization />
        {children}
      </InternationalizationProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
