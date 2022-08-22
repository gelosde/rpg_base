import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Characters } from "./Characters";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column({ length: 11 })
  phone: string;

  @Column({ length: 30 })
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column({ default: false })
  isAdm: boolean;

  @OneToOne((type) => Characters, (character) => character.user)
  @JoinColumn({ name: "character" })
  character: Characters;
}
