import express from "express";
import config from "./config/config";

// Create Express server
const app: express.Application = express();

// Express configuration
// TODO: Is this needed?
app.set("port", config.http.port);

export default app;
