import database from "infra/database";

async function migrations(req, res) {
  const result = await database.query("SELECT 1 + 1;");

  res.send(result);
}

export default migrations;
