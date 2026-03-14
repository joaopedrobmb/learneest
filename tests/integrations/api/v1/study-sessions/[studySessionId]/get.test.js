import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("GET /api/v1/study-sessions/[study-session-id]", () => {
  describe("Anonymous user", () => {
    test("Existent study session", async () => {
      const validStudySession = await orchestrator.createStudySession({
        subject: "ExistentStudySession",
      });

      const response = await fetch(
        `http://localhost:3000/api/v1/study-sessions/${validStudySession.id}`,
      );

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        id: responseBody.id,
        subject: "ExistentStudySession",
        status: "pending",
        scheduled_start: responseBody.scheduled_start,
        scheduled_end: responseBody.scheduled_end,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.scheduled_start)).not.toBeNaN();
      expect(Date.parse(responseBody.scheduled_end)).not.toBeNaN();
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();
    });
    test("nonexistent study session", async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/study-sessions/4becba8e-5671-4a65-bd23-b2733e45e24d",
      );

      expect(response.status).toBe(404);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "NotFoundError",
        message: "Study session not found.",
        action: "Check if the id is correct and try again.",
        status_code: 404,
      });
    });
  });
});
