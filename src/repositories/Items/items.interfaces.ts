interface IItems {
  id: string;
  name: string;
  type: string;
  size: number;
  weight: number;
  damage: number;
  defense: number;
  durability: number;
  effect: string;
  quantity: number;
}

interface IItemsRepo {
  saveItem: (item: IItems) => Promise<IItems>;
  listAllItems: () => Promise<IItems[]>
  findItemById: (id: string) => Promise<IItems>;
  findItemByName: (name: string) => Promise<IItems>;
}

export { IItems, IItemsRepo };
