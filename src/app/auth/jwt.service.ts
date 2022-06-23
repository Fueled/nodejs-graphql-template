import jwt from "jsonwebtoken";
import { JwtError, JwtExpiredError, JwtNotBeforeError } from "./errors";

// export const JwtService: JwtServiceInterface = {
export const JwtService = {
  sign(payload: string | object | Buffer, secret: jwt.Secret, options?: jwt.SignOptions): string {
    return jwt.sign(payload, secret, options);
  },

  signWithExpiry(payload: string | object | Buffer, secret: jwt.Secret, expiresIn: number): string {
    return this.sign(payload, secret, { expiresIn });
  },

  signWithNotBefore(payload: string | object | Buffer, secret: jwt.Secret, notBefore: number): string {
    return this.sign(payload, secret, { notBefore });
  },

  verify(token: string, secret: jwt.Secret): jwt.JwtPayload | string {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      if (err instanceof jwt.NotBeforeError) {
        throw new JwtNotBeforeError(err.message);
      }
      if (err instanceof jwt.TokenExpiredError) {
        throw new JwtExpiredError(err.message);
      }
      if (err instanceof jwt.JsonWebTokenError) {
        throw new JwtError(err.message);
      }
      throw err;
    }
  },
}
