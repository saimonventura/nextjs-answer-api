import { gql } from "@apollo/client";

export const GetRates = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;
