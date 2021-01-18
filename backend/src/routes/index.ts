import * as express from "express";

import { Announcement } from "@/models";
import { getRepository, Connection } from "typeorm";
import createDatabaseConnection from '@/database/createConnection';

const log = require("log4js").getLogger("announcements");

export const register = (app: express.Application) => {
  app.get("/", (_, res) => {
    log.info("hello");
    res.send("index");
  });

  app.get("/announcement", async (_, res) => {
    const announcementRepository = getRepository(Announcement);
    try {
      const listOfAnnouncements = await announcementRepository.find({
        select: ["id", "url", "name", "description", "createdAt"],
      });
      res.json(listOfAnnouncements);
    } catch (error) {
      res.status(404);
    }
  });
  app.get("/announcement/:id", async (_, res) => {

    console.log(announcementWithId);
    res.json(announcementWithId);
  });
};
