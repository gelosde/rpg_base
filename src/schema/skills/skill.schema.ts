import * as yup from "yup";

const addSkillSchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  level_required: yup.number().required(),
  type: yup.string().lowercase().required(),
  damage: yup.number(),
  special_effect: yup.string().lowercase(),
  cost_skill: yup.number().required(),
  type_target: yup.string().lowercase().required(),
  cost_type: yup.string().lowercase().required(),
  element_target: yup.string().lowercase().required(),
  power_rank: yup.number().required(),
});

export default addSkillSchema;
