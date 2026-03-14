import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

const TWO_HOURS_IN_MILLISECONDS = 2 * 60 * 60 * 1000;
const TWO_DAYS_IN_MILLISECONDS = 2 * 24 * 60 * 60 * 1000;
const now = new Date();
const twoHoursPastFromNow = new Date(now - TWO_HOURS_IN_MILLISECONDS);

describe("PATCH /api/v1/study-sessions", () => {
  describe("Anonymous user", () => {
    test("With valid data", async () => {
      const createdStudySession = await orchestrator.createStudySession({
        subject: "withValidData",
      });

      const response = await fetch(
        `http://localhost:3000/api/v1/study-sessions/${createdStudySession.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "withValidData2",
          }),
        },
      );

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        id: responseBody.id,
        subject: "withValidData2",
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

      expect(responseBody.updated_at > responseBody.created_at).toBe(true);
    });
    test("With scheduled_start in the past", async () => {
      const createdStudySession = await orchestrator.createStudySession({
        subject: "scheduledStartInPast",
      });

      const response = await fetch(
        `http://localhost:3000/api/v1/study-sessions/${createdStudySession.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            scheduled_start: twoHoursPastFromNow,
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
      const createdStudySession = await orchestrator.createStudySession({
        subject: "scheduledEndBeforeStart",
        scheduled_start: new Date(now + TWO_DAYS_IN_MILLISECONDS),
      });

      const createdScheduleStart = createdStudySession.scheduled_start;
      const scheduledEndBeforeStart = new Date(
        createdScheduleStart - TWO_HOURS_IN_MILLISECONDS,
      );

      const response = await fetch(
        `http://localhost:3000/api/v1/study-sessions/${createdStudySession.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
