import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { readFileSync } from "fs";
import http from "http";
import config from "./config";
import * as resolvers from "./resolvers";
import { getGraphQLContext } from "./graphql-context";

export async function startGraphQLServer(
  app: express.Application,
  httpServer: http.Server
): Promise<void> {
  const typeDefs = readFileSync(`${__dirname}/schema.graphql`).toString("utf-8");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: getGraphQLContext,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    csrfPrevention: config.graphql.csrfPrevention,
    introspection: config.graphql.introspectionEnabled,
  });

  await server.start();

  server.applyMiddleware({ app });
}
