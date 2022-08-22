import { Request, Response } from "express";
import { UserRepository } from "../../repositories";

const updateUserController = async (req: Request, res: Response) => {
  const user = await new UserRepository().findUserByEmail(req.email);

  if(!user) {
    return res.status(404).json({ message: "User not found" })
  }

  if (user) {
    await new UserRepository().updateUser(user, req.validated)
    const userUpdated = await new UserRepository().findById(user.id)
    const { password, isAdm, ...newUser} = userUpdated
    return res.status(200).json(newUser)
  }
};

export default updateUserController;
