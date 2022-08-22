import { Router } from "express";
import { getAllSkillsController } from "../../controllers";


const routerSkills = Router();


routerSkills.get("/", getAllSkillsController);



export default routerSkills
