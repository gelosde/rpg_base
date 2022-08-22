import { Request, Response } from "express";
import {
  CharacterRepository,
  InventoryRepository,
  UserRepository,
} from "../../repositories";

const deleteCharacterController = async (req: Request, res: Response) => {
  const nameChar = req.params.name;
  const user = await new UserRepository().findUserByEmail(req.email);
  const Alluser = await new UserRepository().findWithCharacterRelation();

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const deleteUser = [];
  Alluser.forEach((user) => {
    if (user.email === req.email) {
      deleteUser.push(user);
    }
  });

  if (
    !deleteUser[0].character?.name ||
    deleteUser[0].character?.name !== nameChar
  ) {
    return res.status(404).json({ message: "Character not found" });
  }

  const inventory = deleteUser[0].character.inventory;

  const delChar = await new CharacterRepository().deleteCharacter(
    deleteUser[0].character.name
  );

  const delinventory = await new InventoryRepository().deleteInventory(
    inventory.id
  );

  return res.status(204).json();
};
export default deleteCharacterController;
