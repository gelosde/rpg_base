import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  size: number;

  @Column({ nullable: false })
  weight: number;

  @Column({ nullable: false })
  max_weight: number;
}
