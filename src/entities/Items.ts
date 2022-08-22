import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { InventoryItem } from "./InventoryItens";
import { Monsters } from "./Monster";

@Entity()
export class Items {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, default: "test" })
  name: string;

  @Column({ default: 1, nullable: false })
  quantity: number;

  @Column({ nullable: false })
  type: string;

  @Column({ default: 1, nullable: false })
  size: number;

  @Column({ default: 1 })
  weight: number;

  @Column({ default: 0, nullable: false })
  damage: number;

  @Column({ default: 1, nullable: false })
  defense: number;

  @Column({ default: 1, nullable: false })
  durability: number;

  @Column()
  effect: string;

  @ManyToOne(() => InventoryItem, (inventoryItem) => inventoryItem.id)
  inventoryItem: InventoryItem;

  @ManyToOne(() => Monsters, (monster) => monster.items_drop)
  monster: Monsters;
}
