import type { NextApiRequest, NextApiResponse } from "next";

import { restApi } from "services/restapi";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).send("Method not allowed!");
  }
  if (!req.body?.query) {
    return res.status(401).send("Query is required!");
  }

  const { query } = req.body;
  try {
    const { data } = await restApi.post(
      "answer/Answer/Question",
      {
        query,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.M3O_API_KEY}`,
        },
      },
    );

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};
