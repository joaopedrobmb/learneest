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
        message: "Study session not found.",
        action: "Check if the id is correct and try again.",
      });
    }

    return results.rows[0];
  }
}

async function create(userInputValues) {
  await validateScheduledDates(userInputValues);

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

async function update(id, userInputValues) {
  const currentStudySession = await findOneById(id);

  const studySessionWithNewValues = {
    ...currentStudySession,
    ...userInputValues,
  };

  await validateScheduledDates(studySessionWithNewValues);

  const updatedStudySession = await runUpdateQuery(studySessionWithNewValues);

  return updatedStudySession;

  async function runUpdateQuery(studySessionWithNewValues) {
    const results = await database.query({
      text: `
      UPDATE
        study_sessions
      SET
        subject = $2,
        scheduled_start = $3,
        scheduled_end = $4,
        updated_at = timezone('utc', now())
      WHERE
        id = $1
      RETURNING
        * 
      `,
      values: [
        studySessionWithNewValues.id,
        studySessionWithNewValues.subject,
        studySessionWithNewValues.scheduled_start,
        studySessionWithNewValues.scheduled_end,
      ],
    });

    return results.rows[0];
  }
}

async function insertDeleteStatus(studySessionId) {
  const studySessionObject = await findOneById(studySessionId);

  const updatedStudySession = await runUpdateQuery(studySessionObject);

  return updatedStudySession;

  async function runUpdateQuery(studySessionObject) {
    const results = await database.query({
      text: `
      UPDATE
        study_sessions
      SET
        status = 'deleted',
        updated_at = timezone('utc', now())
      WHERE
        id = $1
      RETURNING
        * 
      `,
      values: [studySessionObject.id],
    });

    return results.rows[0];
  }
}

function validateScheduledDates(userInputValues) {
  const VALIDATION_DELAY = 1000;

  const now = new Date();
  const nowWithDelay = new Date(now - VALIDATION_DELAY);

  const start = new Date(userInputValues.scheduled_start);
  const end = new Date(userInputValues.scheduled_end);

  if ("scheduled_start" in userInputValues && start < nowWithDelay) {
    throw new ValidationError({
      message: "Scheduled start date is in the past.",
      action: "You can only schedule a study session in the future.",
    });
  }

  if ("scheduled_end" in userInputValues && end < start) {
    throw new ValidationError({
      message: "Scheduled end is before scheduled start.",
      action: "You can only schedule a study session after the schedule start.",
    });
  }
}

const studySession = {
  findOneById,
  create,
  update,
  insertDeleteStatus,
};

export default studySession;
