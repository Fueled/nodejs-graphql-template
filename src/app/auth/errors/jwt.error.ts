import config from "../../../config";

export class JwtError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "JwtError";

    if (!config.debug) {
      delete this.stack;
    }
  }
}
