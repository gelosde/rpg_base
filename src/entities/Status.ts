import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Classes } from "./Class";

@Entity()
export class Status {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  strength: number;

  @Column({ nullable: false })
  intelligency: number;

  @Column({ nullable: false })
  hp: number;

  @Column({ nullable: false })
  stamina: number;

  @Column({ nullable: false })
  mana: number;

  @Column({ nullable: false })
  speed: number;
}
