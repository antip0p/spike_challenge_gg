import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import { json } from 'body-parser';
import * as sapper from "@sapper/server";
import Database from 'better-sqlite3';

const { PORT, NODE_ENV } = process.env;

const db = new Database('db/database.sqlite', { verbose: console.log });
db.prepare("CREATE TABLE IF NOT EXISTS distances (\
              id INTEGER PRIMARY KEY AUTOINCREMENT, \
              address0 VARCHAR(255), \
              address1 VARCHAR(255), \
              distance INTEGER)"
          ).run();

polka()
  .use(json())
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev: NODE_ENV === "development" }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
