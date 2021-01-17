import "dotenv/config";
import { getRepository } from "typeorm";
import express from "express";
import { Announcement } from "@/models";
const log = require("log4js").getLogger("announcements");

export const register = (app: express.Application) => {
  const announcementRepository = getRepository(Announcement);

  // define a route handler for the default home page
  app.get("/", (_, res) => {
    res.send("Hello sdf!");
    log.info("hello world");
  });

  // TODO: pagination
  app.get("/announcement", async (_, res) => {
    try {
      const listOfAnnouncements = await announcementRepository.find({
        select: ["id", "url", "name", "description", "createdAt"],
      });
      res.json(listOfAnnouncements);
    } catch (error) {
      res.status(404);
    }
  });
  app.get("/announcement:id", async (req, res) => {
    const id = req.params.id;

    try {
      const announcementWithId = await announcementRepository.find({
        select: ["id", "url", "name", "description", "createdAt"],
        relations: ["price"],
        where: {
          id,
        },
      });
      res.json(announcementWithId);
    } catch {
      res.status(404);
    }
  });
};
