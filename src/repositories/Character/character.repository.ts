import { getRepository, Repository } from "typeorm";
import { Characters } from "../../entities/Characters";
import { Iuser } from "../User/interfacesUser";
import { ICharacterRepo, ICharacter } from "./chacarater.interfaces";

class CharacterRepository implements ICharacterRepo {
  private ormrepository: Repository<Characters>;

  constructor() {
    this.ormrepository = getRepository(Characters);
  }

  saveCharacter = async (character: ICharacter) =>
    await this.ormrepository.save(character);

  findCharacters = async (user: ICharacter) =>
    await this.ormrepository.findOne(user);

  findByname = async (name: any) =>
    await this.ormrepository.findOne({ name: name });

  updatelevel = async (
    char: ICharacter,
    updatelvl: number,
    xp_needed: number,
    xp: number
  ) =>
    await this.ormrepository.update(char, {
      level: updatelvl,
      xp: xp,
      xp_needed: xp_needed,
    });

  xpTotal = async (char: ICharacter, updatexp: number) =>
    await this.ormrepository.update(char, { xp: updatexp });

  xpNeed = async (char: ICharacter, updatexp: number) =>
    await this.ormrepository.update(char, { xp_needed: updatexp });

  deleteCharacter = async (name: string) =>
    await this.ormrepository.delete({ name });
}

export { CharacterRepository, ICharacter, ICharacterRepo };
