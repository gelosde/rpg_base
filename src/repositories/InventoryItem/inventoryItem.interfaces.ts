import { Items } from "../../entities/Items";

interface IInventoryItem {
  id: string;
  name: string;
  quantity: number;
  id_inventory: string;
  items: Items[];
}

interface IInventoryItemRepo {
  getListIntem: () => Promise<IInventoryItem>;
  getAllListIntem: () => Promise<IInventoryItem[]>;
}

export { IInventoryItem, IInventoryItemRepo };
