import { Request, Response } from "express";
import { SkillRepository } from "../../repositories";




const getAllSkillsController = async (req: Request, res: Response) => {
    const skills = await new SkillRepository().listAllSkills()

    return res.status(200).json(skills)
}


export default getAllSkillsController
