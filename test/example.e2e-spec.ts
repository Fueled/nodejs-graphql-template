import express from "express";
import request from "supertest";

describe("a test with a HTTP request", () => {
  const app = express();

  app.get("/hello", function (req, res) {
    res.status(200).json({ data: "World!" });
  });

  describe("GET /hello", () => {
    it("should return a successful JSON response", async () => {
      return new Promise((done) => {
        request(app)
          .get("/hello")
          .expect("Content-Type", "application/json")
          .expect({
            data: "World!",
          })
          .expect(200, done);
      });
    });
  });
});
