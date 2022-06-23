// import { Request } from "express";
import jwt from "jsonwebtoken";

// User object must implement Authenticable interface.
// It can be adjusted as needed, depending on authentication strategy.
export interface Authenticable {
  email: string;
}

export interface JwtService {
  // Allow any other methods & properties
  [name: string]: unknown;

  /**
   * Sign a JWT with a given payload & secret.
   * Other signin options can be specified optionally.
   *
   * @param payload JWT payload
   * @param secret JWT secret
   * @param options JWT sign options
   */
  sign(payload: string | object | Buffer, secret: jwt.Secret, options?: jwt.SignOptions): string;

  /**
   * Sign a JWT with a given payload, secret & expiry time in seconds.
   *
   * @param payload JWT payload
   * @param secret JWT secret
   * @param expiresIn Expires in time in seconds
   */
  signWithExpiry(payload: string | object | Buffer, secret: jwt.Secret, expiresIn: number): string;

  /**
   * Sign a JWT with a given payload, secret & not before time in seconds.
   *
   * @param payload JWT payload
   * @param secret JWT secret
   * @param notBefore Not before time in seconds
   */
  signWithNotBefore(payload: string | object | Buffer, secret: jwt.Secret, notBefore: number): string

  /**
   * Verify a JWT & return decoded payload if valid.
   *
   * @param token JWT
   * @param secret JWT secret
   */
  verify(token: string, secret: jwt.Secret): jwt.JwtPayload | string;

  /**
   * Retrieve JWT from request data.
   *
   * @param req Express request object
   */
   getTokenFromExpressRequest<T>(req: T): string | null;
}
