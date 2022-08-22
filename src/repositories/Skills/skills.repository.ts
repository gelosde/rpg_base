import { getRepository, Repository } from "typeorm";
import { Skills } from "../../entities/Skills";
import { ISkillsRepo, ISkills } from "./skills.interfaces";

class SkillRepository implements ISkillsRepo {
  private ormrepository: Repository<Skills>;

  constructor() {
    this.ormrepository = getRepository(Skills);
  }

  saveSkill = async (skill: ISkills) => await this.ormrepository.save(skill);
  listAllSkills = async () => await this.ormrepository.find();
  findSkillById = async (id: string) => await this.ormrepository.findOne(id);
  findSkillByName = async (name: string) => await this.ormrepository.findOne({ name: name });
}

export { SkillRepository, ISkillsRepo, ISkills };
