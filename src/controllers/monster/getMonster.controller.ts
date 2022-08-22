import { Request, Response } from "express";
import { IMonster, MonsterRepository } from "../../repositories/index";

const monsterListController = async (req: Request, res: Response) => {
  if (req.query.name) {
    const onemonster: IMonster = await new MonsterRepository().findByMonsterName(req.query.name);

    if (!onemonster) {
      return res.status(404).json({ message: `Monster '${req.query.name}' not found` });
    } else {
      return res.status(200).json(onemonster);
    }
  } else {
    const listall = await new MonsterRepository().filterMonsterListall();
    // const inlist = [];
    // for (let cont = 0; cont < listall.length; cont++) {
    //   let toInlist = {
    //     name: listall[cont].name,
    //     lvl: listall[cont].nivel,
    //   };
    //   inlist.push(toInlist);
    // }

    return res.status(200).json(listall);
  }
};
export default monsterListController;
