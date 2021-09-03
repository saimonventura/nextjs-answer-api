import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AnswerText = styled.h1`
  margin: 2rem;
`;

export const AnswerLink = styled.a`
  margin: 2rem;
  font-size: 3rem;
  text-decoration: underline;
  color: white;
  cursor: pointer;
`;

export const AnswerImageWrapper = styled.div`
  margin: 2rem;
`;

export const AnswerImage = styled.img``;
