import { NextFunction, Request, Response } from "express";
import { Iuser, UserRepository } from "../repositories";

const verifyUserPermission = async (req: Request, res: Response, next: NextFunction)=>{
    const {email} = req
    const user: Iuser = await new UserRepository().findUserByEmail(email)
    if(!user){
        res.status(401).json({message: "Unauthorized"})
    }
    if(!user.isAdm){
       return res.status(401).json({message: "Unauthorized"})
    }
    return next()
}

export default verifyUserPermission