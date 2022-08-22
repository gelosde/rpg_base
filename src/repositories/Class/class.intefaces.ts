import { Characters } from "../../entities/Characters";
import { Status } from "../../entities/Status"
import { ISkills } from "../Skills/skills.interfaces";

interface IClass {
    id?: string
    name: string,
    status: Status,
    skills: ISkills[],
    character?: Characters
}


interface IClassRepo {
    saveClass: (classes: IClass) => Promise<IClass>
    findClasses: () => Promise<IClass[]>;
    findClassById: (id: string)=> Promise<IClass>;
    findClassByName: (name: string)=>Promise<IClass>;
    
}


export { IClass, IClassRepo } 