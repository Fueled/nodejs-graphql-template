import config from "../config";
import winston from "winston";

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: config.logging.level,
    }),
    new winston.transports.File({ filename: "debug.log", level: "debug" }),
  ],
};

const logger = winston.createLogger(options);

if (config.debug) {
  logger.debug("Logging initialized at debug level");
}

export default logger;
