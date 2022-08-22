import { Router } from "express";
import { authenticatedUser, validateSchema } from "../../middlewares";
import {
  monsterListController,
  MonsterBatleController,
} from "../../controllers";
import { veriryBatleResultsSchema } from "../../schema";
const routerMonster = Router();

routerMonster.get("/monster", monsterListController);
routerMonster.post(
  "/monster",
  validateSchema(veriryBatleResultsSchema),
  authenticatedUser,
  MonsterBatleController
);
export default routerMonster;
