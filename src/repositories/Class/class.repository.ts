import { getRepository, Repository } from "typeorm";
import { Classes } from "../../entities/Class";
import { IClass, IClassRepo } from "./class.intefaces";



class ClassRepository implements IClassRepo {
    private ormrepository: Repository<Classes>

    constructor(){
        this.ormrepository = getRepository(Classes)
    }

    saveClass = async (classes: IClass) => await this.ormrepository.save(classes)
    findClasses = async () => await this.ormrepository.find({ relations: ["status", "skills"] })  
    findClassById = async (id: string) => await this.ormrepository.findOne(id)
    findClassByName = async (name: string)=> await this.ormrepository.findOne({ name: name })
    
}

export { ClassRepository, IClass, IClassRepo }
