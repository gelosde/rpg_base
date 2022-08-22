import { Request, Response } from "express";
import { Iuser, UserRepository } from "../../repositories";

const getUsersController = async (_:Request, res: Response)=>{
    const usersRelationCharacter = await new UserRepository().findWithCharacterRelation()
    const usersWithoutPassword: Array<{}>= []
    usersRelationCharacter.forEach((user)=>{
        const {password, ...userWithoutPassword}=user
        usersWithoutPassword.push(userWithoutPassword)
    })

    res.status(200).json(usersWithoutPassword)
}
export default getUsersController