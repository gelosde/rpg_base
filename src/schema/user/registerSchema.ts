import * as yup from "yup";

const schemaRegister = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().max(11).min(8).required(),
  age: yup.number().required(),
  address: yup.string().required(),
});

export default schemaRegister;
