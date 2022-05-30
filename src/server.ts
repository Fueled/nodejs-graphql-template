import app from "./app";
import config from "./config/config";

/**
 * Error Handler. Provides full stack trace.
 */
// if (config.debug) {
//   app.use(errorHandler());
// }

const start = async (): Promise<void> => {
  try {
    const address = await app.listen(config.http.port, config.http.host);
    console.log(
      `  [Server] Server is running on ${address} in ${process.env.NODE_ENV as string} mode.`
    );
    console.log("  Press CTRL-C to stop\n");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start();
