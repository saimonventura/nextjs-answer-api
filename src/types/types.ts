export type AnswerResponse = {
  answer: string;
  url?: string;
  image?: string;
};

export type GraphQLQueryAnswer = {
  data: AnswerResponse;
};

export type MainProps = {
  title?: string;
  description?: string;
  serverSideData: AnswerResponse;
};

export type ServerSideProps = {
  serverSideData: AnswerResponse;
};

export type GraphQLAnswer = {
  execute: (query: string) => void;
};
