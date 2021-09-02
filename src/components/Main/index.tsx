import * as S from "./styles";

const Main = ({
  title = "NextJS - AnswerAPI - GraphQL",
  description = "TypeScript, React, NextJS, GraphQL, AnswerAPI and Styled Components",
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
