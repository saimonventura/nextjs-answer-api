import { useLazyQuery } from "@apollo/client";
import { ApolloAnswerQuery } from "graphql/queries";
import {
  useImperativeHandle,
  useMemo,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FormattedMessage } from "react-intl";
import * as Type from "types/types";
import * as SharedStyle from "../sharedStyle";

const GraphQLAnswer: ForwardRefRenderFunction<
  Type.GraphQLAnswer,
  Type.ServerSideProps
> = ({ serverSideData }, ref) => {
  const [getAnswer, { loading, error, data }] = useLazyQuery(ApolloAnswerQuery);

  useImperativeHandle(ref, () => ({
    execute: (query: string) => {
      getAnswer({ variables: { query } });
    },
  }));

  const answerData = useMemo(() => {
    return data?.answer || serverSideData?.answer;
  }, [data?.answer, serverSideData?.answer]);

  if (loading)
    return (
      <div>
        <FormattedMessage defaultMessage="Loading..." id="Loading" />
      </div>
    );
  if (error) {
    console.log(error);
    return (
      <div>
        <FormattedMessage defaultMessage="No results found" id="NoResults" />
      </div>
    );
  }

  return answerData?.answer ? (
    <SharedStyle.AnswerWrapper>
      <SharedStyle.AnswerText>{answerData.answer}</SharedStyle.AnswerText>
      <SharedStyle.AnswerLink href={answerData.url}>
        {answerData.url}
      </SharedStyle.AnswerLink>
      <SharedStyle.AnswerImageWrapper>
        {answerData.image ? (
          <SharedStyle.AnswerImage src={answerData.image} />
        ) : null}
      </SharedStyle.AnswerImageWrapper>
    </SharedStyle.AnswerWrapper>
  ) : null;
};

export default forwardRef(GraphQLAnswer);
