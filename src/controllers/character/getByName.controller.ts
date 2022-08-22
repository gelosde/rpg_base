import { Request, Response } from "express";
import { CharacterRepository, ICharacter } from "../../repositories";


const getCharacterByName = async (req: Request, res: Response) => {

    if(!req.query.name) {
        return res.status(400).json({ message: "Please specify character name." })
    }
    
    const character: ICharacter  = await new CharacterRepository().findByname(req.query.name)

    if(!character){
        return res.status(404).json({ message: "Character not found" })
    }

    const characterResponse = {
        name: character.name,
        class: character.class.name,
        level: character.level
    }

    return res.status(200).json(characterResponse)
}


export default getCharacterByName
