import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Items } from "./Items";
import { Skills } from "./Skills";

@Entity()
export class Monsters {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  hp: number;

  @Column()
  mana: number;

  @Column({ nullable: false })
  stamina: number;

  @Column({ nullable: false })
  damage: number;

  @Column({ nullable: false, default: 100 })
  xp_drop: number;

  @Column({ nullable: false, default: 1 })
  nivel: number;

  @Column({ nullable: false })
  quantity_drop: number;

  @OneToMany(() => Skills, (skills) => skills.monster)
  skills: Skills[];

  @OneToMany(() => Items, (item) => item.monster, { cascade: true })
  items_drop: Items[];
}
