import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import * as Type from "types/types";

export const AnswerService = {
  GetAnswer: async (
    query: string,
    callback?: Dispatch<SetStateAction<Type.AnswerResponse | undefined>>,
  ): Promise<Type.AnswerResponse> => {
    try {
      const { data } = await axios.post<Type.AnswerResponse>("/api/answer", {
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
