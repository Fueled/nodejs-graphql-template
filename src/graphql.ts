import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { readFileSync } from "fs";
import config from "./config/config";
import context from "./context";
import resolvers from "./resolvers";


export default async (app: express.Application): Promise<void> => {
  const typeDefs = readFileSync(`${__dirname}/schema.graphql`).toString("utf-8");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [
      // TODO: Should this remain enabled in prod?
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    introspection: config.graphql.isIntrospectionEnabled,
  });

  await server.start();

  server.applyMiddleware({app});
};
