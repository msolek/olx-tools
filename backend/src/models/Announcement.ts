import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  Entity
} from "typeorm";
import AnnouncementData from "./AnnouncementData";

@Entity()
class Announcement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: unique = true
  @Column("varchar", { nullable: false, unique: false })
  url: string;

  @Column("varchar", { nullable: true })
  name: string;

  @Column("text", { nullable: true })
  description: string | null;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @OneToMany(() => AnnouncementData, (announcementId) => announcementId.id)
  announcementDatas: AnnouncementData[];
}

export default Announcement;
