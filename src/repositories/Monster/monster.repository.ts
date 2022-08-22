import { getRepository, Repository, Not } from "typeorm";
import { Monsters } from "../../entities/Monster";
import { IMonster, IMonsterRepo } from "./interfacesMonster";

class MonsterRepository implements IMonsterRepo {
  private ormrepository: Repository<Monsters>;

  constructor() {
    this.ormrepository = getRepository(Monsters);
  }
  findMonsterName: (Name: string) => Promise<IMonster>;
  filterMonsterList: (list: string) => Promise<IMonster[]>;

  saveMonster = async (monster: IMonster) =>
    await this.ormrepository.save(monster);
  findByMonsterName = async (name: any) =>
    await this.ormrepository.findOne({ name: name }, { relations: ["skills", "items_drop"] });
  filterMonsterListall = async () =>
    await this.ormrepository.find({ order: { name: "ASC" }, relations: ["skills", "items_drop"]  });
}

export { MonsterRepository, IMonster, IMonsterRepo };
