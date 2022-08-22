import { Request, Response } from "express";
import { Skills } from "../../entities/Skills";
import { ISkills, SkillRepository } from "../../repositories";

const registerSkillController = async (req: Request, res: Response) => {
  try {
    const duplicatedSkillName = await new SkillRepository().findSkillByName(
      req.validated.name
    );
    console.log(duplicatedSkillName);
    if (duplicatedSkillName) {
      return res.status(409).json({ message: "Skill name already exists" });
    }
    const skill: Skills = {
      ...req.validated,
    };

    const addedSkill: ISkills = await new SkillRepository().saveSkill(skill);
    return res.status(201).json(addedSkill);
  } catch (error) {
    console.log(error);
  }
};
export default registerSkillController;
