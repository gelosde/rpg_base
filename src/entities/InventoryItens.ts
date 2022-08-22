import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Inventory } from "./Inventory";
import { Items } from "./Items";

@Entity()
export class InventoryItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: 0 })
  quantity: number;

  @OneToOne(() => Inventory, (inventory) => inventory.id, { nullable: false })
  @JoinColumn()
  inventory: Inventory;

  @OneToMany(() => Items, (items) => items)
  items: Items[];
}
