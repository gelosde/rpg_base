import { getRepository, Not, Repository } from "typeorm";
import { InventoryItem } from "../../entities/InventoryItens";
import { IInventoryItemRepo, IInventoryItem } from "./inventoryItem.interfaces";
import { Items } from "../../entities/Items";

class InventoryItemRepository implements IInventoryItemRepo {
  private ormrepository: Repository<InventoryItem>;

  constructor() {
    this.ormrepository = getRepository(InventoryItem);
  }

  getListIntem: () => Promise<IInventoryItem>;

  getAllListIntem: () => Promise<IInventoryItem[]>;

  insertNewItem = async (item: Items) => await this.ormrepository.save(item);

  findOne = async (id_inventory: string) =>
    await this.ormrepository.findOne(id_inventory);

  findall = async () =>
    await this.ormrepository.find({ id: Not("namedodododododo") });

  updateitem = async (inventoryItemId: string, itensNew: Array<Items>) =>
    await this.ormrepository.update(
      { id: inventoryItemId },
      { items: itensNew }
    );
}

export { IInventoryItemRepo, InventoryItemRepository, IInventoryItem };
