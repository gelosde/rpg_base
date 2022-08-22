import { Router } from "express";

import {
  createClassController,
  getUsersController,
  registerItemController,
  registerMonsterController,
  registerSkillController,
  deleteUserController,
  getOneUserController,
} from "../../controllers";

import { authenticatedUser, validateSchema } from "../../middlewares";
import verifyUserPermission from "../../middlewares/verifyUserPermission.middleware";
import { addItemSchema, addSkillSchema, createClassSchema } from "../../schema";
import addMonsterSchema from "../../schema/monster/monster.schema";

const routerAdm = Router();

routerAdm.get("/", authenticatedUser, verifyUserPermission, getUsersController);
routerAdm.get(
  "/:email",
  authenticatedUser,
  verifyUserPermission,
  getOneUserController
);
routerAdm.delete(
  "/:email",
  authenticatedUser,
  verifyUserPermission,
  deleteUserController
);
routerAdm.post(
  "/items",
  validateSchema(addItemSchema),
  authenticatedUser,
  verifyUserPermission,
  registerItemController
);
routerAdm.post(
  "/skills",
  validateSchema(addSkillSchema),
  authenticatedUser,
  verifyUserPermission,
  registerSkillController
);

routerAdm.post(
  "/classes",
  validateSchema(createClassSchema),
  authenticatedUser,
  verifyUserPermission,
  createClassController
);

routerAdm.post(
  "/monster",
  validateSchema(addMonsterSchema),
  authenticatedUser,
  verifyUserPermission,
  registerMonsterController
);

export default routerAdm;
