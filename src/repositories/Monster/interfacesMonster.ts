import { IItems } from "../Items/items.interfaces";
import { ISkills } from "../Skills/skills.interfaces";

interface IMonster {
  id?: string;
  name: string;
  hp: number;
  mana: number;
  stamina: number;
  damage: number;
  xp_drop: number;
  nivel: number;
  quantity_drop: number;
  skills: ISkills[];
  items_drop?: IItems[];
}

interface IMonsterRepo {
  saveMonster: (character: IMonster) => Promise<IMonster>;
  findMonsterName: (Name: string) => Promise<IMonster>;
  filterMonsterList: (Name: string) => Promise<IMonster[]>;
}

export { IMonster, IMonsterRepo };
