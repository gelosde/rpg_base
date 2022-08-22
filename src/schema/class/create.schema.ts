import * as yup from "yup"



const createClassSchema = yup.object().shape({
    name: yup.string().lowercase().required(),
    status: yup.object({
        strength: yup.number().required(),
        intelligency: yup.number().required(),
        hp: yup.number().required(),
        stamina: yup.number().required(),
        mana: yup.number().required(),
        speed: yup.number().required(),
    }),
    skills_name: yup.array().of(yup.string()).required() 
})


export default createClassSchema