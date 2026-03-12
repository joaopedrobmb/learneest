import database from "infra/database.js";
import { ValidationError, NotFoundError } from "infra/errors.js";

async function findOneById(studySessionId) {
  const studySessionFound = await runSelectQuery(studySessionId);

  return studySessionFound;

  async function runSelectQuery(studySessionId) {
    const results = await database.query({
      text: `
    SELECT
      *
    FROM
      study_sessions
    WHERE
      id = $1
    LIMIT
      1
        ;`,
      values: [studySessionId],
    });

    if (results.rowCount === 0) {
      throw new NotFoundError({
        message: "Id not found.",
        action: "Check if the id is correct and try again.",
      });
    }

    return results.rows[0];
  }
}

async function create(userInputValues) {
  await validateScheduledDates(
    userInputValues.scheduled_start,
    userInputValues.scheduled_end,
  );

  const newStudySession = await runInsertQuery(userInputValues);
  return newStudySession;

  async function runInsertQuery(userInputValues) {
    const results = await database.query({
      text: `
    INSERT INTO
      study_sessions (subject, scheduled_start, scheduled_end)
    VALUES 
      ($1, $2, $3)
    RETURNING
      *
      ;`,
      values: [
        userInputValues.subject,
        userInputValues.scheduled_start,
        userInputValues.scheduled_end,
      ],
    });

    return results.rows[0];
  }
}

function validateScheduledDates(scheduled_start, scheduled_end) {
  const VALIDATION_DELAY = 1000;

  const now = new Date();
  const nowWithDelay = new Date(now.getTime() - VALIDATION_DELAY);
  const start = new Date(scheduled_start);
  const end = new Date(scheduled_end);

  if (start < nowWithDelay || end < nowWithDelay) {
    throw new ValidationError({
      message: "Scheduled date is in the past.",
      action: "You can only schedule a study session in the future.",
    });
  }
}

const studySession = {
  findOneById,
  create,
};

export default studySession;
