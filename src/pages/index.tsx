import Main from "components/Main";
import { apolloClient } from "graphql/client";
import { ApolloAnswerQuery } from "graphql/queries";
import { GetServerSideProps } from "next";
import { FC } from "react";
import * as Type from "types/types";

const Home: FC<Type.MainProps> = ({ serverSideData }) => {
  return <Main serverSideData={serverSideData} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.query?.s) {
    return { props: {} };
  }

  const query = context.query?.s;

  const { data } = await apolloClient.query({
    query: ApolloAnswerQuery,
    variables: { query },
  });

  return {
    props: { serverSideData: data },
  };
};

export default Home;
