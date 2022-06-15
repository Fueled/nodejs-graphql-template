import fs from "fs";
import express from "express";
import jwt from "jsonwebtoken";
import { JwtService as JwtServiceInterface } from "../types";
import { JwtError, JwtExpiredError, JwtNotBeforeError } from "./errors";

export const JwtService: JwtServiceInterface = {
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

  readKey(path: string): Buffer {
    return fs.readFileSync(path);
  },

  getTokenFromRequest(req: express.Request): string | null {
    const header = req.header("Authorization");
    if (!header) {
      return null;
    }

    return header.replace("Bearer ", "");
  }
}
