import { gql } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
import request from "supertest";

describe("a REST based HTTP request", () => {
  const app = express();

  app.get("/hello", function (req, res) {
    res.status(200).json({ data: "World!" });
  });

  describe("GET /hello", () => {
    it("should return a successful response", async () => {
      return new Promise((done) => {
        request(app)
          .get("/hello")
          .expect("Content-Type", "application/json")
          .expect({
            data: "World!",
          })
          .expect(200, done);
      });
    });
  });
});

describe("a GraphQL based HTTP request", () => {
  let app: express.Application;
  let httpServer: http.Server;
  let server: ApolloServer;

  const typeDefs = gql`
    type Query {
      hello(name: String): String!
    }
  `;

  const resolvers = {
    Query: {
      // eslint-disable-next-line
      hello: (_: any, { name }: { name: string }) => `Hello ${name}!`,
    },
  };

  describe("POST /graphql", () => {
    beforeAll(async () => {
      app = express();
      httpServer = http.createServer(app);
      server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      await server.start();
      server.applyMiddleware({ app });
    });

    afterAll(async () => {
      await server.stop();
    });

    it("should return a successful response", async () => {
      const queryData = {
        query: `query sayHello($name: String) {
          hello(name: $name)
        }`,
        variables: { name: "world" },
      };

      const response = await request(httpServer).post("/graphql").send(queryData);

      expect(response.statusCode).toBe(200);
      expect(response.body.data).toEqual({
        hello: "Hello world!",
      });
    });
  });
});
