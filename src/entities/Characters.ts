import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classes } from "./Class";
import { Inventory } from "./Inventory";
import { User } from "./User";

@Entity()
export class Characters {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, unique: true, length: 15 })
  name: string;

  @Column({ nullable: false })
  xp: number;

  @Column({ nullable: false })
  xp_needed: number;

  @Column({ nullable: false, default: 1 })
  level: number;

  @OneToOne((type) => User, (user) => user.character, {
    nullable: false,
    cascade: true,
    onDelete: "SET NULL",
  })
  user: User;

  @OneToOne((type) => Inventory, {
    nullable: false,
    cascade: true,
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn({ name: "inventory" })
  inventory: Inventory;

  @ManyToOne((type) => Classes, (classes) => classes.characters, {
    nullable: false,
    cascade: true,
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn({ name: "class" })
  class: Classes;
}
