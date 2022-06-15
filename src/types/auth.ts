import { Request } from "express";
import jwt from "jsonwebtoken";

// User object must implement Authenticable interface.
// It can be adjusted as needed, depending on authentication strategy.
export interface Authenticable {
  email: string;
}

export interface JwtService {
  [name: string]: unknown;

  sign(payload: string | object | Buffer, secret: jwt.Secret, options?: jwt.SignOptions): string;

  signWithExpiry(payload: string | object | Buffer, secret: jwt.Secret, expiresIn: number): string;

  signWithNotBefore(payload: string | object | Buffer, secret: jwt.Secret, notBefore: number): string

  verify(token: string, secret: jwt.Secret): jwt.JwtPayload | string;

  readKey(path: string): Buffer;

  getTokenFromRequest(req: Request): string | null;
}
