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
import AnnouncementData from "./AnnouncementData"
  
@Entity()
class Announcement extends BaseEntity {
    static validations = {
        url: [is.required(), is.url()],
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", { nullable: false })
    url: string;

    @Column("varchar")
    name: string;

    @Column("text", { nullable: true })
    description: string | null;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @OneToMany(() => AnnouncementData,
     announcementDatas => announcementDatas.id,
     )
    announcementDatas: AnnouncementData[];
   
}

export default Announcement;