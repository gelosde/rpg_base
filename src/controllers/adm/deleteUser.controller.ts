import { Request, Response } from "express";
import { CharacterRepository, InventoryRepository, UserRepository } from "../../repositories";

const deleteUserController = async (req:Request, res:Response)=>{
    
    const {email}=req.params
    const Alluser = await new UserRepository().findWithCharacterRelation()

    const userArray = []
    for(let i = 0; i < Alluser.length; i++) {
        if(Alluser[i].email === email){
            userArray.push(Alluser[i])
        }
    }
    const [desconstruction] = userArray
    
    if(!desconstruction) {
        return res.status(404).json({ message: "User not found" })
    }
    
    if(desconstruction.character !== null) {
        const charName = desconstruction.character.name
        const delChar = await new CharacterRepository().deleteCharacter(charName)

        const inventory = desconstruction.character.inventory
        const delinventory = await new InventoryRepository().deleteInventory(inventory.id);
    }

    const deleteUser = await new UserRepository().deleteUser(desconstruction.email);

    return res.status(204).json()
}
export default deleteUserController
