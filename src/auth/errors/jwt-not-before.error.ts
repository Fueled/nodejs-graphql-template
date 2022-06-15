import { JwtError } from "./jwt.error";

export class JwtNotBeforeError extends JwtError {
  constructor(message: string) {
    super(message);
    this.name = "JwtNotBeforeError";
  }
}
