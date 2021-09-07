import { useInternationalization } from "hooks/InternationalizationContext";
import { FC } from "react";
import * as Style from "./styles";

const Internationalization: FC = () => {
  const { setShortLocale } = useInternationalization();
  return (
    <Style.Wrapper>
      {[
        { language: "de", flag: "🇩🇪" },
        { language: "en", flag: "🇺🇸" },
      ].map(({ language, flag }) => (
        <Style.Language
          onClick={() => setShortLocale([language])}
          key={language}
        >
          {flag}
        </Style.Language>
      ))}
    </Style.Wrapper>
  );
};

export default Internationalization;
