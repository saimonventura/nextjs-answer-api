import GraphQLAnswer from "components/GraphQLAnswer";
import { FC, useCallback, useRef, useState } from "react";
import * as Type from "types/types";
import * as Style from "./styles";
import * as SharedStyle from "../sharedStyle";

const Main: FC<Type.MainProps> = ({
  title = "NextJS - AnswerAPI - GraphQL",
  description = "TypeScript, React, NextJS, GraphQL, AnswerAPI and Styled Components",
  serverSideData,
}) => {
  const [search, setSearch] = useState("");

  const ref = useRef<Type.GraphQLAnswer>(null);

  const handleSearch = useCallback(() => {
    ref.current?.execute(search);
  }, [search]);

  return (
    <SharedStyle.Wrapper>
      <Style.Title>{title}</Style.Title>
      <Style.Description>{description}</Style.Description>
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
        <Style.SearchButton onClick={handleSearch}>Search</Style.SearchButton>
      </Style.SearchWrapper>

      <GraphQLAnswer ref={ref} serverSideData={serverSideData} />
    </SharedStyle.Wrapper>
  );
};

export default Main;
