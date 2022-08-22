import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const delUser = await new UserRepository().findUserByEmail(req.params.email);

  if (!delUser) {
    return undefined;
  }

  const deleteUser = await new UserRepository().deleteUser(req.params.email);

  return delUser;
};

export default deleteUserService;