import { JwtError } from "./jwt.error";

export class JwtExpiredError extends JwtError {
  constructor(message: string) {
    super(message);
    this.name = "JwtExpiredError";
  }
}
