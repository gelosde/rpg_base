import * as yup from "yup";
const veriryBatleResultsSchema = yup.object().shape({
  batleResultInfo: yup.bool().required(),
  monsterName: yup.string().required(),
});
export default veriryBatleResultsSchema;
