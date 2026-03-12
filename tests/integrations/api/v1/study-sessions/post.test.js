import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";
import user from "models/user.js";
import password from "models/password.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

const TWO_HOURS_IN_MILLISECONDS = 2 * 60 * 60 * 1000;
const FOUR_HOURS_IN_MILLISECONDS = 2 * 60 * 60 * 1000;

describe("POST /api/v1/study-sessions", () => {
  describe("Anonymous user", () => {
    test("With valid data", async () => {
      const sessionScheduledStart = new Date();
      const sessionScheduledEnd = new Date(
        sessionScheduledStart.getTime() + TWO_HOURS_IN_MILLISECONDS,
      );

      const response = await fetch(
        "http://localhost:3000/api/v1/study-sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "Math",
            scheduled_start: sessionScheduledStart,
            scheduled_end: sessionScheduledEnd,
          }),
        },
      );

      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        id: responseBody.id,
        subject: "Math",
        scheduled_start: responseBody.scheduled_start,
        scheduled_end: responseBody.scheduled_end,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();
    });
    test("With `scheduled_start` and `scheduled_end` in the past", async () => {
      const now = new Date();
      const sessionScheduledStartInPast = new Date(
        now.getTime() - FOUR_HOURS_IN_MILLISECONDS,
      );
      const sessionScheduledEndInPast = new Date(
        sessionScheduledStartInPast.getTime() - TWO_HOURS_IN_MILLISECONDS,
      );

      const response = await fetch(
        "http://localhost:3000/api/v1/study-sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "ScheduledTimeInPast",
            scheduled_start: sessionScheduledStartInPast,
            scheduled_end: sessionScheduledEndInPast,
          }),
        },
      );

      expect(response.status).toBe(400);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "Scheduled date is in the past.",
        action: "You can only schedule a study session in the future.",
        status_code: 400,
      });
    });
  });
});
