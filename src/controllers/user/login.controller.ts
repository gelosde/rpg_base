import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

import { jwtConfig } from "../../configs/index";
import { UserRepository } from "../../repositories/User/user.repository";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userFinder = await new UserRepository().findUserByEmail(email);

  if (!userFinder) {
    return res.status(401).json({ message: "user not found" });
  }

  if (userFinder) {
    const matchUser = await bcrypt.compare(password, userFinder.password);
    if (!matchUser) {
      return res
        .status(401)
        .json({ message: "Wrong email or password. Try again!" });
    }
    const loginToken = sign({ email, password }, jwtConfig.secretKey, {
      expiresIn: jwtConfig.expiresIn,
    });
    return res.status(200).json({ token: loginToken });
  }
};
export default login;
