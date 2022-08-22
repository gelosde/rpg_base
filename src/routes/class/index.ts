import { Router } from "express";
import { getClassController } from "../../controllers";
import { authenticatedUser } from "../../middlewares";




const routerClass = Router()


routerClass.get("/", authenticatedUser ,getClassController)



export default routerClass