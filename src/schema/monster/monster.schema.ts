import * as yup from "yup";

const addMonsterSchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  hp: yup.number().required(),
  mana: yup.number().required(),
  stamina: yup.number().required(),
  damage: yup.number().required(),
  xp_drop: yup.number().required(),
  nivel: yup.number().required(),
  quantity_drop: yup.number().required(),
  skills_name: yup.array().of(yup.string()),
  items_drop: yup.array().of(yup.string()),
});

export default addMonsterSchema;
