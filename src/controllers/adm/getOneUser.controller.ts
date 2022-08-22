import { Request, Response } from "express";
import { User } from "../../entities/User";
import { Iuser, UserRepository } from "../../repositories";

const getOneUserController = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const usersRelationCharacter =
      await new UserRepository().findWithCharacterRelation();
    const rightUser = [];
    usersRelationCharacter.forEach((user) => {
      if (user.email === email) {
        rightUser.push(user);
      }
    });

    const { password, ...userWithoutPassword } = rightUser[0];
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

export default getOneUserController;
