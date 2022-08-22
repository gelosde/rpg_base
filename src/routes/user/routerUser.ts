import { Router } from "express";

import {
  authenticatedUser,
  validateSchema,
  checkExistRegister,
} from "../../middlewares";
import { schemaRegister, schemaLogin, updateUserSchema } from "../../schema";
import { getProfileController, login, register, updateUserController } from "../../controllers";

const routerUser = Router();

routerUser.post("/register", validateSchema(schemaRegister), checkExistRegister, register);
routerUser.post("/login", validateSchema(schemaLogin), login);
routerUser.get("/profile", authenticatedUser, getProfileController)
routerUser.patch("/user", validateSchema(updateUserSchema), authenticatedUser, checkExistRegister, updateUserController);



export default routerUser;
