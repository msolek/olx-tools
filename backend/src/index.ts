require("module-alias").addAlias("@", __dirname);
import "dotenv/config";
import express from "express";
import createDatabaseConnection from "@/database/createConnection";
import createExampleAnnouncements from "@/database/createBlobData";
import * as log4js from "log4js";
import * as routes from "./routes";

const app = express();
const port = 5003; // default p

log4js.configure({
  appenders: {
    file: { type: "file", filename: "./logs.log" },
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["file", "console"], level: "debug" },
  },
});

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "debug" }));

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
  } catch (error) {
    console.log(error);
  }
};
routes.register(app);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const bootstrap = async (): Promise<void> => {
  await establishDatabaseConnection();
  await createExampleAnnouncements();
};
bootstrap();
