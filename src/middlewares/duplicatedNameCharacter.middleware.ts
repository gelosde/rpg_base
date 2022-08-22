import { NextFunction, Request, Response } from "express";
import { CharacterRepository } from "../repositories";



const duplicatedNameCharacter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const verifyDuplicatedName = await new CharacterRepository().findByname(req.validated.name)
        
        if(verifyDuplicatedName){
            return res.status(409).json({ message: "Character name already exists" })
        }
    
        return next()
    } catch (error) {   
        console.log(error)
    }

}


export default duplicatedNameCharacter
