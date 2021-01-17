import { Announcement  } from "@/models";
import { createEntity }  from "@/utils/typeorm";

const seedAnnouncements = (): Promise<Announcement[]> => {
    const announcements = [
        createEntity(Announcement, {
            url: "https://www.olx.pl/oferta/wiata-wiaty-altany-altanka-CID628-IDGIoJC.html"
        }),
        createEntity(Announcement, {
            url: "https://www.olx.pl/oferta/altana-ogrodowa-3-90x3-90-m-CID628-IDGIt4l.html#cd6dad5461;promoted"
        })
    ];
    return Promise.all(announcements);
}

const createExampleAnnouncements = async (): Promise<Announcement> => {
    const users = await seedAnnouncements();
    return users[1];
};
export default createExampleAnnouncements;
