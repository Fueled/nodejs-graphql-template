import { ExpressContext } from "apollo-server-express";
import { Authenticable, GraphQLContext } from "../../types";

// Replace Authenticable with the user interface
type Context = GraphQLContext<Authenticable>;

// eslint-disable-next-line @typescript-eslint/require-await
export const getGraphQLContext = async ({ req, res }: ExpressContext): Promise<Context> => {
  const context: Context = {
    req,
    res,
  };

  // Implement user retrieval here.
  // Use RequestUtils.getTokenFromRequest(req) to retrieve Bearer token.

  return context;
};
