import { useRouter } from "next/dist/client/router";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { IntlProvider } from "react-intl";

import English from "../../content/locales/en.json";
import German from "../../content/locales/de.json";

type InternationalizationContextData = {
  setShortLocale: Dispatch<SetStateAction<string[]>>;
};

const InternationalizationContext =
  createContext<InternationalizationContextData>(
    {} as InternationalizationContextData,
  );

const InternationalizationProvider: FC = ({ children }) => {
  const { locale } = useRouter();
  const [[shortLocale], setShortLocale] = useState(
    locale ? locale.split("-") : ["en"],
  );

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "de":
        return German;
      case "en":
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <InternationalizationContext.Provider value={{ setShortLocale }}>
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}
      >
        {children}
      </IntlProvider>
    </InternationalizationContext.Provider>
  );
};

function useInternationalization(): InternationalizationContextData {
  const context = useContext(InternationalizationContext);

  if (!context) {
    throw new Error(
      "useInternationalization deve ser utilizado com um InternationalizationProvider",
    );
  }

  return context;
}

export { InternationalizationProvider, useInternationalization };
