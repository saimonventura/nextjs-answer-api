import { gql } from "@apollo/client";

export const ApolloAnswerQuery = gql`
  query ($query: String) {
    answer(query: $query)
      @rest(path: "answer/Answer/Question?query={args.query}") {
      answer
      url
      image
    }
  }
`;
