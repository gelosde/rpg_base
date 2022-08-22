import * as yup from "yup";

const schemaLogin = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().required().email(),
});

export default schemaLogin;
