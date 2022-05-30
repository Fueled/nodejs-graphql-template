import fastify, { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

// Create Express server
const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: true,
});

// eslint-disable-next-line @typescript-eslint/require-await
app.get("/ping", async () => {
  return "pong\n";
});

export default app;
