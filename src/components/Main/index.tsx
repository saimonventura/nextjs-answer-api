import { useCallback, useState } from "react";
import { AnswerService } from "services/AnswerService";
import { AnswerResponseType } from "types/types";
import * as S from "./styles";

const Main = ({
  title = "NextJS - AnswerAPI - GraphQL",
  description = "TypeScript, React, NextJS, GraphQL, AnswerAPI and Styled Components",
}) => {
  const [answer, setAnswer] = useState<AnswerResponseType>();
  const [question, setQuestion] = useState("");

  const onClickSearch = useCallback(() => {
    AnswerService.GetAnswer(question, setAnswer);
  }, [question]);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.SearchWrapper>
        <S.InputQuestion
          value={question}
          onChange={({ currentTarget: { value } }) => setQuestion(value)}
        />
        <S.SearchButton onClick={onClickSearch}>Search</S.SearchButton>
      </S.SearchWrapper>

      <S.AnswerWrapper>{JSON.stringify(answer)}</S.AnswerWrapper>
    </S.Wrapper>
  );
};

export default Main;
