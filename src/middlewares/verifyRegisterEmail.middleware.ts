import { UserRepository } from "../repositories/index";
import { Request, Response, NextFunction } from "express";

const checkExistRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.validated;
  const findEmail = await new UserRepository().findUserByEmail(email);
  if (findEmail) {
    return res
      .status(409)
      .json({ error: `${findEmail.email} is already registered ` });
  } else next();
};
export default checkExistRegister;
