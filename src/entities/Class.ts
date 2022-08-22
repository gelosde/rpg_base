import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Characters } from "./Characters";
import { Skills } from "./Skills";
import { Status } from "./Status";

@Entity()
export class Classes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false, length: 50 })
  name: string;

  @OneToOne((type) => Status, { nullable: false, cascade: true })
  @JoinColumn()
  status: Status;

  @OneToMany((type) => Skills, (skills) => skills.classes, { nullable: false, cascade: true })
  skills: Skills[];

  @OneToMany((type) => Characters, (characters) => characters.class)
  characters: Characters[];
}
