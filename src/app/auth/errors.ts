import config from "../../config";

export class JwtError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "JwtError";

    if (!config.debug) {
      delete this.stack;
    }
  }
}

export class JwtNotBeforeError extends JwtError {
  constructor(message: string) {
    super(message);
    this.name = "JwtNotBeforeError";
  }
}

export class JwtExpiredError extends JwtError {
  constructor(message: string) {
    super(message);
    this.name = "JwtExpiredError";
  }
}
