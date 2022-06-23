import { ApolloError } from "apollo-server-errors";

export class InternalServerError extends ApolloError {
  constructor(message: string) {
    super(message, "INTERNAL_SERVER_ERROR");
    Object.defineProperty(this, "name", { value: "InternalServerError" });
  }
}

export class NotAuthenticatedError extends ApolloError {
  constructor(message: string) {
    super(message, "NOT_AUTHENTICATED");
    Object.defineProperty(this, "name", { value: "NotAuthenticatedError" });
  }
}

export class ForbiddenError extends ApolloError {
  constructor(message: string) {
    super(message, "FORBIDDEN");
    Object.defineProperty(this, "name", { value: "ForbiddenError" });
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
