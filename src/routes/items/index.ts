import { Router } from "express";
import { getAllItemsController, getAllSkillsController } from "../../controllers";


const routerItems = Router();


routerItems.get("/", getAllItemsController);



export default routerItems
