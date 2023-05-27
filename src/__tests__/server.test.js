const request = require("supertest");
const app = require("../server/server");

describe("GET /test", () => {
  it('should respond with "test response"', async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("test response");
  });
});
