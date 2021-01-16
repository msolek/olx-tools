import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    Entity
  } from "typeorm";
import is from "@/utils/validations";
import { AnnouncementData } from "./AnnouncementData";
  
@Entity()
class Announcement extends BaseEntity {
    static validations = {
        url: [is.required(), is.url()],
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("text", { nullable: true })
    description: string | null;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @OneToMany(() => AnnouncementData,
     announcementDatas => announcementDatas.announcement
     )
    announcementDatas: AnnouncementData[];
   
}

export default Announcement;