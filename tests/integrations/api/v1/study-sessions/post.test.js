import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

const TWO_HOURS_IN_MILLISECONDS = 2 * 60 * 60 * 1000;
const FOUR_HOURS_IN_MILLISECONDS = 4 * 60 * 60 * 1000;
const now = new Date();
const twoHoursFromNow = new Date(now.getTime() + TWO_HOURS_IN_MILLISECONDS);

describe("POST /api/v1/study-sessions", () => {
  describe("Anonymous user", () => {
    test("With valid data", async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/study-sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "validSubject",
            scheduled_start: now,
            scheduled_end: twoHoursFromNow,
          }),
        },
      );

      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        id: responseBody.id,
        subject: "validSubject",
        status: "pending",
        scheduled_start: responseBody.scheduled_start,
        scheduled_end: responseBody.scheduled_end,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();
    });
    test("With `scheduled_start` in the past", async () => {
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
          }),
        },
      );

      expect(response.status).toBe(400);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "Scheduled start date is in the past.",
        action: "You can only schedule a study session in the future.",
        status_code: 400,
      });
    });
    test("With scheduled_end before scheduled_start", async () => {
      const scheduledEndBeforeStart = new Date(now - TWO_HOURS_IN_MILLISECONDS);

      const response = await fetch(
        `http://localhost:3000/api/v1/study-sessions/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            scheduled_start: now,
            scheduled_end: scheduledEndBeforeStart,
          }),
        },
      );

      expect(response.status).toBe(400);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "Scheduled end is before scheduled start.",
        action:
          "You can only schedule a study session after the schedule start.",
        status_code: 400,
      });
    });
  });
});
