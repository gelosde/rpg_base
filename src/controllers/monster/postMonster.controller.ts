import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../../configs";
import {
  CharacterRepository,
  UserRepository,
  MonsterRepository,
  IMonster,
  ICharacter,
} from "../../repositories";

const MonsterBatleController = async (req: Request, res: Response) => {
  const token = req.headers.authorization.split(" ")[1];

  const batleResult: boolean = req.validated.batleResultInfo;

  const MonsterInfo: string = req.validated.monsterName;

  const findMonsterByName = await new MonsterRepository().findByMonsterName(req.validated.monsterName)

  if (!findMonsterByName) {
    return res.status(404).json({ err: "Monster not found" });
  }

  jwt.verify(
    token,
    jwtConfig.secretKey,
    async (__: any, decode: string | any) => {
      const user = await new UserRepository().findUserByEmail(decode.email);
      const char: ICharacter = await new CharacterRepository().findCharacters(
        user.character
      );
      if (!char) {
        return res.status(404).json({ err: "Char not found" });
      }

      const monster: IMonster[] =
        await new MonsterRepository().filterMonsterListall();

      const monsterNum: number = monster.findIndex(
        (monster) => MonsterInfo === monster.name
      );

      if (batleResult === false) {
        if (char.xp - 100 <= 0 && char.level > 1) {
          await new CharacterRepository().updatelevel(
            char,
            char.level - 1,
            char.xp_needed - 100,
            char.xp_needed - (monster[monsterNum].xp_drop + 100)
          );
        } else if (char.xp > 0) {
          await new CharacterRepository().xpTotal(char, char.xp - 100);
        }
      } else {
        if (char.xp + monster[monsterNum].xp_drop < char.xp_needed) {
          await new CharacterRepository().xpTotal(
            char,
            char.xp + monster[monsterNum].xp_drop
          );
        } else
          await new CharacterRepository().updatelevel(
            char,
            char.level + 1,
            char.xp_needed + 100,
            char.xp - (char.xp_needed - monster[monsterNum].xp_drop)
          );
      }
      return res.json({
        player: { level: char.level, xpTotal: char.xp, xpNeed: char.xp_needed },
      });
    }
  );
};
export default MonsterBatleController;
