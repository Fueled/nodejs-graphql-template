import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { readFileSync } from "fs";
import http from "http";
import config from "./utils/config";
import context from "./context";
import resolvers from "./resolvers";

export default async function startGraphQLServer(
  app: express.Application,
  httpServer: http.Server
): Promise<void> {
  const typeDefs = readFileSync(`${__dirname}/schema.graphql`).toString("utf-8");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
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
