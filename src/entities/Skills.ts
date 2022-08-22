import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Classes } from "./Class";
import { Monsters } from "./Monster";

@Entity()
export class Skills {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  level_required: number;

  @Column({ nullable: false })
  type: string;

  @Column()
  damage: number;

  @Column()
  special_effect: string;

  @Column({ nullable: false })
  cost_skill: number;

  @Column({ nullable: false })
  type_target: string;

  @Column({ nullable: false })
  cost_type: string;

  @Column({ nullable: false })
  element_target: string;

  @Column({ nullable: false })
  power_rank: number;

  @ManyToOne(() => Classes, (classes) => classes.skills)
  @JoinColumn({ name: "class" })
  classes: Classes;

  @ManyToOne(() => Monsters, (monster) => monster.skills)
  monster: Monsters;
}
