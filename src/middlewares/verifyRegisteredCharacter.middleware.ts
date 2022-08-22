import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";



const verifyRegisteredCharacter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await new UserRepository().findUserByEmail(req.email)
    
        const usersRelationCharacter = await new UserRepository().findWithCharacterRelation()
        
    
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        const result = []
        usersRelationCharacter.forEach(el => {
            if(el.email === user.email && el.character !== null ) {
                result.push(el)
            }
        })
    
        if(result.length === 1) {
            return res.status(400).json({ message: "You already have a registered character" })
        }
    
        return next()
    
    } catch (error) {
        console.log(error)       
    }

}


export default verifyRegisteredCharacter
