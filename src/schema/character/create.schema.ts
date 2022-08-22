import * as yup from "yup"


const createCharacterSchema = yup.object().shape({
    name: yup.string().min(3).max(15).lowercase().required(),
    class_name: yup.string().lowercase().required()
})


export default createCharacterSchema