import { ApolloError } from "apollo-server-errors";

export class ApplicaitonError extends ApolloError {
  constructor(message: string) {
    super(message, "APPLICATION_ERROR");
    Object.defineProperty(this, "name", { value: "ApplicationError" });
  }
}

export class ConflictError extends ApolloError {
  constructor(message: string) {
    super(message, "CONFLICT");
    Object.defineProperty(this, "name", { value: "ConflictError" });
  }
}

export class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, "NOT_FOUND");
    Object.defineProperty(this, "name", { value: "NotFoundError" });
  }
}
