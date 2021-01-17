import { Announcement } from "@/models";
import { createEntity } from "@/utils/typeorm";

const seedAnnouncements = (): Promise<Announcement[]> => {
  const announcements = [
    createEntity(Announcement, {
      url:
        "https://www.olx.pl/oferta/wiata-wiaty-altany-altanka-CID628-IDGIoJC.html",
    }),
    createEntity(Announcement, {
      url:
        "https://www.olx.pl/oferta/pracujesz-w-korpo-popraw-w-3-miesiace-angielski-online-przez-skype-CID619-IDnIl86.html",
    }),
  ];
  return Promise.all(announcements);
};

const createExampleAnnouncements = async (): Promise<Announcement> => {
  const users = await seedAnnouncements();
  return users[1];
};

export default createExampleAnnouncements;
