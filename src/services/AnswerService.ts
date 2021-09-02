import { Dispatch, SetStateAction } from "react";
import { AnswerResponseType } from "types/types";
import { restApi } from "./restapi";

export const AnswerService = {
  GetAnswer: async (
    query: string,
    callback?: Dispatch<SetStateAction<AnswerResponseType | undefined>>
  ): Promise<AnswerResponseType> => {
    try {
      const { data } = await restApi.post<AnswerResponseType>(
        "Answer/Question",
        {
          query,
        }
      );

      if (callback) {
        callback(data);
      }

      return data;
    } catch (error) {
      return Promise.reject("Something went wrong");
    }
  },
};
