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
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              onClickSearch();
            }
          }}
          value={question}
          onChange={({ currentTarget: { value } }) => setQuestion(value)}
        />
        <S.SearchButton onClick={onClickSearch}>Search</S.SearchButton>
      </S.SearchWrapper>

      {answer?.answer ? (
        <S.AnswerWrapper>
          <S.AnswerText>{answer.answer}</S.AnswerText>
          <S.AnswerLink href={answer.url}>{answer.url}</S.AnswerLink>
          <S.AnswerImageWrapper>
            {answer.image ? <S.AnswerImage src={answer.image} /> : null}
          </S.AnswerImageWrapper>
        </S.AnswerWrapper>
      ) : null}
    </S.Wrapper>
  );
};

export default Main;
