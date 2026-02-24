import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";
import user from "models/user.js";
import password from "models/password.js";
import { UnauthorizedError } from "infra/errors";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/sessions", () => {
  describe("Anonymous user", () => {
    test("With incorrect 'email' but correct 'password'", async () => {
      await orchestrator.createUser({ password: "correctPassword" });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "incorrectEmail",
          email: "incorrect.email@test.com",
          password: "correctPassword",
        }),
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Incorrect email.",
        action: "Try another email.",
        status_code: 401,
      });
    });
    test("With correct 'email' but incorrect 'password'", async () => {
      await orchestrator.createUser({ email: "incorrectPassword@test.com" });

      const response = await fetch("http://localhost:3000/api/v1/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "incorrectPassword",
          email: "incorrectPassword@test.com",
          password: "incorrectPassword",
        }),
      });

      expect(response.status).toBe(401);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "UnauthorizedError",
        message: "Incorrect password.",
        action: "Try another password.",
        status_code: 401,
      });
    });
  });
});
