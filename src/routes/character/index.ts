import { Router } from "express";
import {
  createCharacterController,
  deleteCharacterController,
  getCharacterByNameController,
} from "../../controllers";
import {
  authenticatedUser,
  duplicatedNameCharacter,
  validateSchema,
  verifyRegisteredCharacter,
} from "../../middlewares";
import { createCharacterSchema } from "../../schema";

const routerCharacter = Router();

routerCharacter.post(
  "/",
  validateSchema(createCharacterSchema),
  authenticatedUser,
  verifyRegisteredCharacter,
  duplicatedNameCharacter,
  createCharacterController
);

routerCharacter.get("/", getCharacterByNameController);

routerCharacter.delete("/:name", authenticatedUser, deleteCharacterController);

export default routerCharacter;
