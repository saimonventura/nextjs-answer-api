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
  /* justify-content: center; */
  position: relative;
`;

// export const Logo = styled.img`
//   width: 25rem;
//   margin-bottom: 2rem;
// `;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

// export const Illustration = styled.img`
//   margin-top: 3rem;
//   width: min(30rem, 100%);
// `;

export const SearchWrapper = styled.div`
  position: sticky;
  margin: 2rem;
`;

export const InputQuestion = styled.input`
  font-size: large;
  margin: 2rem;
`;

export const SearchButton = styled.button`
  font-size: large;
  margin: 2rem;
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
