import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { AnswerResponseType } from "types/types";

export const AnswerService = {
  GetAnswer: async (
    query: string,
    callback?: Dispatch<SetStateAction<AnswerResponseType | undefined>>,
  ): Promise<AnswerResponseType> => {
    try {
      const { data } = await axios.post<AnswerResponseType>("/api/answer", {
        query,
      });

      if (callback) {
        callback(data);
      }

      return data;
    } catch (error) {
      return Promise.reject("Something went wrong");
    }
  },
};
