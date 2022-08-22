import { Request, Response } from "express";
import { ICharacter, CharacterRepository, UserRepository, ClassRepository, IInventory } from "../../repositories";
import { v4 as uuidv4 } from "uuid";


const createCharacterController = async (req: Request, res: Response) => {
    try {
        const user = await new UserRepository().findUserByEmail(req.email)
        const findClassName = await new ClassRepository().findClassByName(req.validated.class_name)

        if(!findClassName) {
            return res.status(404).json({ message: `Class name '${req.validated.class_name}' not exists` })
        }
        
        const newInventory: IInventory = {
            id: uuidv4(),
            size: 10,
            weight: 0,
            max_weight: 1000
        }
        
    
        const newCharacter: ICharacter = {
            name: req.validated.name,
            user: user,
            xp: 0,
            xp_needed: 100,
            level: 1,
            inventory: newInventory,
            class: findClassName
        }

        const character =  await new CharacterRepository().saveCharacter(newCharacter)
        
        const characterResponse = {
            name: req.validated.name,
            level: character.level,
            xp: character.xp,
            xp_needed: character.xp_needed,
            class: findClassName.name,
            inventory: [],
        }
        return res.status(201).json(characterResponse)

    } catch (error) {
        console.log(error)
    }
}


export default createCharacterController
