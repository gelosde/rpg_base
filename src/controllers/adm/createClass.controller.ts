import { Request, Response } from "express";
import { ClassRepository, IClass, ISkills, SkillRepository } from "../../repositories";



const createClassController = async (req: Request, res: Response) => {
    try {
        const duplicatedName = await new ClassRepository().findClassByName(req.validated.name)
        if(duplicatedName){
            return res.status(400).json({ message: `Class '${req.validated.name}' is already exists` })
        }


        const arraySkills: ISkills[] = []
        for(let i = 0; i < req.validated.skills_name.length; i++) {
            const dataSkill = await new SkillRepository().findSkillByName(req.validated.skills_name[i])
            if(!dataSkill){
                return res.status(404).json({ message: `Skill '${req.validated.skills_name[i]}' not found` })
            }
            arraySkills.push(dataSkill) 
        }
        
        const newClass: IClass = {
            name: req.validated.name,
            status: req.validated.status,
            skills: arraySkills
        }
        
        const classes = await new ClassRepository().saveClass(newClass)       

        return res.status(201).json(classes)
    } catch (error) {
        console.log(error)
    }
    
}


export default createClassController
