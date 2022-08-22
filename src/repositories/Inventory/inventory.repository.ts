import { getRepository, Repository } from "typeorm";
import { Inventory } from "../../entities/Inventory";
import { IInventoryRepo, IInventory } from "./inventory.interfaces";

class InventoryRepository implements IInventoryRepo {
  private ormrepository: Repository<Inventory>;

  constructor() {
    this.ormrepository = getRepository(Inventory);
  }

  saveInventory = async (inventory: IInventory) =>
    await this.ormrepository.save(inventory);
  deleteInventory = async (uuid: string) =>
    await this.ormrepository.delete(uuid);
}

export { InventoryRepository, IInventory, IInventoryRepo };
