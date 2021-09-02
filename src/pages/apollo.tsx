import { useQuery } from "@apollo/client";
import { GetRates } from "../graphql/queries";

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(GetRates);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(
    ({ currency, rate }: { currency: string; rate: string | number }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    )
  );
}
