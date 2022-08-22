import { Request, Response } from "express";
import { ClassRepository } from "../../repositories";



const getClassController = async (req: Request, res: Response) => {
    const getClass= await new ClassRepository().findClasses()
    
    return res.status(200).json(getClass)
}


export default getClassController
