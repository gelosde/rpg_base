import { Request, Response } from "express";
import { UserRepository } from "../../repositories";



const getProfileController = async (req: Request, res: Response) => {
    const user = await new UserRepository().findEmail(req.email)

    return res.status(200).json(user)
}

export default getProfileController
