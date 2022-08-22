import { Request, Response } from "express";
import { Items } from "../../entities/Items";
import { IItems, ItemRepository } from "../../repositories";

const registerItemController = async (req: Request, res: Response) => {
  try {
    const duplicatedItemName = await new ItemRepository().findItemByName(
      req.validated.name
    );
    if (duplicatedItemName) {
      return res.status(409).json({ message: `Item '${req.validated.name}' is already exists` });
    }
    const item: Items = {
      ...req.validated,
    };

    const addedItem: IItems = await new ItemRepository().saveItem(item);
    return res.status(201).json(addedItem);
  } catch (error) {
    console.log(error);
  }
};
export default registerItemController;
