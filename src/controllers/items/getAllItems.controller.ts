import { Request, Response } from "express";
import { ItemRepository } from "../../repositories";





const getAllItemsController = async (req: Request, res: Response) => {
    const items = await new ItemRepository().listAllItems()

    return res.status(200).json(items)
}


export default getAllItemsController