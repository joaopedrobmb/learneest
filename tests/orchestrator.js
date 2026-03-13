import { faker } from "@faker-js/faker";
import retry from "async-retry";
import database from "infra/database.js";
import migrator from "models/migrator.js";
import session from "models/session";
import studySession from "models/study-session";
import user from "models/user.js";

const emailHttpUrl = `http://${process.env.EMAIL_HTTP_HOST}:${process.env.EMAIL_HTTP_PORT}`;

async function waitForAllServices() {
  await waitForWebServer();
  await waitForEmailServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, { retries: 100 });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
    }
  }
  async function waitForEmailServer() {
    return retry(fetchEmailPage, { retries: 100 });

    async function fetchEmailPage() {
      const response = await fetch(emailHttpUrl);

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

async function runPendingMigrations() {
  await migrator.runPendingMigrations();
}

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

async function createUser(userObject) {
  return await user.create({
    username:
      userObject.username || faker.internet.username().replace(/[_.-]/g, ""),
    email: userObject.email || faker.internet.email(),
    password: userObject.password || "validpassword",
  });
}

async function createSession(userId) {
  return await session.create(userId);
}

async function createStudySession(studySessionObject) {
  const TWO_HOURS_IN_MILLISECONDS = 2 * 60 * 60 * 1000;

  const sessionScheduledStart = new Date();
  const sessionScheduledEnd = new Date(
    sessionScheduledStart.getTime() + TWO_HOURS_IN_MILLISECONDS,
  );

  return await studySession.create({
    subject: studySessionObject.subject,
    scheduled_start:
      studySessionObject.scheduled_start || sessionScheduledStart,
    scheduled_end: studySessionObject.scheduled_end || sessionScheduledEnd,
  });
}

async function deleteAllEmail() {
  await fetch(`${emailHttpUrl}/messages`, { method: "DELETE" });
}

async function getLastEmail() {
  const emailListResponse = await fetch(`${emailHttpUrl}/messages`);
  const emailListBody = await emailListResponse.json();
  const lastEmailItem = emailListBody.pop();

  const emailTextResponse = await fetch(
    `${emailHttpUrl}/messages/${lastEmailItem.id}.plain`,
  );

  const emailTextBody = await emailTextResponse.text();

  lastEmailItem.text = emailTextBody;
  return lastEmailItem;
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
  createUser,
  createSession,
  createStudySession,
  deleteAllEmail,
  getLastEmail,
};

export default orchestrator;
