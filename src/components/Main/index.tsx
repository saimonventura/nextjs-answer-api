import GraphQLAnswer from "components/GraphQLAnswer";
import { FC, useCallback, useRef, useState } from "react";
import * as Type from "types/types";
import * as Style from "./styles";
import * as SharedStyle from "../sharedStyle";
import { FormattedMessage } from "react-intl";

const Main: FC<Type.MainProps> = ({ serverSideData }) => {
  const [search, setSearch] = useState("");

  const ref = useRef<Type.GraphQLAnswer>(null);

  const handleSearch = useCallback(() => {
    ref.current?.execute(search);
  }, [search]);

  return (
    <SharedStyle.Wrapper>
      <Style.Title>
        <FormattedMessage
          defaultMessage="NextJS - AnswerAPI - GraphQL"
          id="mainTitle"
        />
      </Style.Title>
      <Style.Description>
        <FormattedMessage
          defaultMessage="TypeScript, React, NextJS, GraphQL, AnswerAPI and Styled Components"
          id="mainDescription"
        />
      </Style.Description>
      <Style.SearchWrapper>
        <Style.InputQuestion
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              handleSearch();
            }
          }}
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(value)}
        />
        <Style.SearchButton onClick={handleSearch}>
          <FormattedMessage defaultMessage="Search" id="Search" />
        </Style.SearchButton>
      </Style.SearchWrapper>

      <GraphQLAnswer ref={ref} serverSideData={serverSideData} />
    </SharedStyle.Wrapper>
  );
};

export default Main;
