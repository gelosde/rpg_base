import { Request, Response } from "express";
import {
  IItems,
  IMonster,
  ISkills,
  ItemRepository,
  MonsterRepository,
  SkillRepository,
} from "../../repositories";

const registerMonsterController = async (req: Request, res: Response) => {
  try {
    const duplicatedMonsterName =
      await new MonsterRepository().findByMonsterName(req.validated.name);
    if (duplicatedMonsterName) {
      return res.status(409).json({ message: `Monster '${req.validated.name}' is already exists` });
    }
    console.log(req.validated)
    const arraySkills: ISkills[] = [];
    for (let i = 0; i < req.validated.skills_name.length; i++) {
      const dataSkill = await new SkillRepository().findSkillByName(
        req.validated.skills_name[i]
      );
      if (!dataSkill) {
        return res.status(404).json({
          message: `Skill '${req.validated.skills_name[i]}' not found`,
        });
      }
      arraySkills.push(dataSkill);
    }

    const arrayItems: IItems[] = [];
    for (let i = 0; i < req.validated.items_drop.length; i++) {
      const dataItem = await new ItemRepository().findItemByName(
        req.validated.items_drop[i]
      );
      if (!dataItem) {
        return res.status(404).json({
          message: `Item '${req.validated.items_drop[i]}' not found`,
        });
      }
      arrayItems.push(dataItem);
    }

    const newMonster: IMonster = {
      name: req.validated.name,
      hp: req.validated.hp,
      mana: req.validated.mana,
      damage: req.validated.damage,
      stamina: req.validated.stamina,
      xp_drop: req.validated.xp_drop,
      nivel: req.validated.nivel,
      quantity_drop: req.validated.quantity_drop,
      skills: arraySkills,
      items_drop: arrayItems
    };

    const monster = await new MonsterRepository().saveMonster(newMonster);

    return res.status(201).json(monster);
  } catch (error) {
    console.log(error);
  }
};

export default registerMonsterController;
