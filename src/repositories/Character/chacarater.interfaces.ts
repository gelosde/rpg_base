import { DeleteResult } from "typeorm";
import { Classes } from "../../entities/Class";
import { Inventory } from "../../entities/Inventory";
import { User } from "../../entities/User";

interface ICharacter {
  name: string;
  user: User;
  inventory: Inventory;
  class: Classes;
  xp: number;
  xp_needed: number;
  level: number;
}

interface ICharacterRepo {
  saveCharacter: (character: ICharacter) => Promise<ICharacter>;
  findByname: (name: any) => Promise<ICharacter>;
  deleteCharacter: (name: string) => Promise<DeleteResult>;
}

export { ICharacter, ICharacterRepo };
