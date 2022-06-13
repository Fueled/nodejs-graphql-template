import express from "express";

export type GraphQLContext = {
  req: express.Request;
  res: express.Response;
};
