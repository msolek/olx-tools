import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import is from "@/utils/validations";
import  Announcement  from "./Announcement";

class AnnouncementData extends BaseEntity {
    static validations = {
        price: [is.required()]
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", { precision: 5, scale: 2, nullable: false })
    price: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @ManyToOne(() => Announcement,
     announcement => announcement.id
     )
    announcements: Announcement[];
}

export default AnnouncementData;