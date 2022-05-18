import { Context } from "./types";

export default async ({ req, res }: any): Promise<Context> => {

  const context: Context = {
    req,
    res,
  };

  return context;
};
