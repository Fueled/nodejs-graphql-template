import express from "express";
import { RequestUtils as RequestUtilsInterface } from "../types";

export const RequestUtils: RequestUtilsInterface<express.Request> = {
  getTokenFromRequest(req): string | null {
    const header = req.header("Authorization");
    if (!header) {
      return null;
    }
    return header.replace("Bearer ", "");
  }
}
