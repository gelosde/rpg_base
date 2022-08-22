import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { UserRepository, Iuser } from "../../repositories";

const register = async (req: Request, res: Response) => {
  const users: User = {
    ...req.validated,
  };

  users.password = bcrypt.hashSync(users.password, 10);

  const Registerede: Iuser = await new UserRepository().saveUser(users);

  return res.status(201).json({
    username: Registerede.username,
    email: Registerede.email,
    phone: Registerede.phone,
    age: Registerede.age,
    address: Registerede.address,
  });
};
export default register;
