import { runner } from "node-pg-migrate";
import database from "infra/database";
import { resolve } from "node:path";

export default async function runMigrations(req, res) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(req.method)) {
    return res
      .status(405)
      .json({ error: `Method "${req.method}" not allowed` });
  }

  let dbClient;
  try {
    console.log("Credentials:", {
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
    });
    dbClient = await database.getNewClient();

    const defaultMigrationsOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    } as const;

    if (req.method === "GET") {
      const pendingMigrations = await runner(defaultMigrationsOptions);
      return res.status(200).json(pendingMigrations);
    }
    if (req.method === "POST") {
      const migratedMigrations = await runner({
        ...defaultMigrationsOptions,
        dryRun: false,
      });

      if (migratedMigrations.length > 0) {
        return res.status(201).json(migratedMigrations);
      }
      return res.status(200).json(migratedMigrations);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
