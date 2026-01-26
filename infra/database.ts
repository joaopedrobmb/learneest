const pgp = require("pg-promise")({});

const cn = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
const db = pgp(cn);

async function query<T = any>(queryObject: string): Promise<T> {
  try {
    const data = await db.one(queryObject);
    return data;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

export default { query: query };
