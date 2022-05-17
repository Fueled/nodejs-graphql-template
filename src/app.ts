import express from "express";
import config from "./config/config";

// Create Express server
const app: express.Application = express();

// Express configuration
app.set("port", config.app.port);

export default app;
