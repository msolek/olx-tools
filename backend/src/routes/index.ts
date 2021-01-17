import * as express from "express";

const log = require("log4js").getLogger("announcements");


export const register = (app: express.Application) => {
  // define a route handler for the default home page

  // TODO: pagination
  app.get("/", (_, res) => {
    log.info("hello");
    res.send("index");
  });


  app.get("/announcement", async (_, res) => {
      
      res.status(404);
    
  });
};