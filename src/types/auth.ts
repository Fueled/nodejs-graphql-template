import jwt from "jsonwebtoken";

export interface JwtService {
  sign(payload: string | object | Buffer, secret: jwt.Secret, options?: jwt.SignOptions): string;
  signWithExpiry(payload: string | object | Buffer, secret: jwt.Secret, expiresIn: number): string;
  signWithNotBefore(payload: string | object | Buffer, secret: jwt.Secret, notBefore: number): string
  verify(token: string, secret: jwt.Secret): jwt.JwtPayload | string;
  readKey(path: string): Buffer;
  [name: string]: unknown;
}
