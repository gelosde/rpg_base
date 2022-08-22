import * as yup from "yup";

const addItemSchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  type: yup.string().lowercase().required(),
  size: yup.number().required(),
  weight: yup.string().lowercase().required(),
  damage: yup.number().required(),
  defense: yup.number().required(),
  durability: yup.number().required(),
  effect: yup.string().lowercase().required(),
  quantity: yup.string().lowercase().required(),
  skills_name: yup.array().of(yup.string()).required(), 
  items_drop: yup.array().of(yup.string()), 
});

export default addItemSchema;
