import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import Announcement from "./Announcement";
@Entity()
class AnnouncementData extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 5, scale: 2, nullable: false })
  price: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  // @ManyToOne(() => Announcement, (announcement) => announcement.id)
  // announcement: Announcement[];
  @ManyToOne(() => Announcement, (announcement) => announcement.details)
  @JoinColumn({name: 'ann_id'})
  announcement: Announcement[];
}

export default AnnouncementData;
