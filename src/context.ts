import express from "express";
import { GraphQLContext } from "./types";

type ContextFnArgs = {
  req: express.Request;
  res: express.Response;
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async ({ req, res }: ContextFnArgs): Promise<GraphQLContext> => {
  const context: GraphQLContext = {
    req,
    res,
  };

  return context;
};
