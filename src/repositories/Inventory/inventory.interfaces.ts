interface IInventory {
    id: string
    size: number
    weight: number
    max_weight: number
}


interface IInventoryRepo {
    saveInventory: (inventory: IInventory) => Promise<IInventory>
}


export { IInventory, IInventoryRepo }