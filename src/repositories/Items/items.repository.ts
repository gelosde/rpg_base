import { getRepository, Repository } from "typeorm";
import { Items } from "../../entities/Items";
import { IItems, IItemsRepo } from "./items.interfaces";

class ItemRepository implements IItemsRepo {
  private ormrepository: Repository<Items>;

  constructor() {
    this.ormrepository = getRepository(Items);
  }

  saveItem = async (item: IItems) => await this.ormrepository.save(item);
  listAllItems = async () => await this.ormrepository.find();
  findItemById = async (id: string) => await this.ormrepository.findOne(id);
  findItemByName = async (name: string) => await this.ormrepository.findOne({ name: name });
}

export { ItemRepository, IItemsRepo, IItems };
