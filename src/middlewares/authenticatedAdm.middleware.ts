import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import { UserRepository } from "../repositories";
import { jwtConfig } from "../configs";

interface IDecode {
  iat: number;
  exp: number;
  user: User;
}

const authenticatedAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if ((req.validated as User).isAdm) {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        res.status(401).json({ message: "Missing authorization token" });
      }
      verify(token, jwtConfig.secretKey, (err, decode) => {
        if (err) {
          res.status(401).json({ message: err });
        }
        if (!(decode as IDecode).user.isAdm) {
          res.status(401).json({ message: "Missing admin permissions" });
        }
        return next();
      });
    } else {
      return next();
    }
  } catch (error) {
    return next(error);
  }
};
export default authenticatedAdm;
