import express from "express";
import { Context } from "./types";

type ContextFnArgs = {
  req: express.Request;
  res: express.Response;
};

// eslint-disable-next-line @typescript-eslint/require-await
export default async ({ req, res }: ContextFnArgs): Promise<Context> => {
  const context: Context = {
    req,
    res,
  };

  return context;
};
