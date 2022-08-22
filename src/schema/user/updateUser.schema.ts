import { hashSync } from "bcryptjs";
import * as yup from "yup";

const updateUserSchema = yup.object().shape({
  username: yup.string().optional(),
  password: yup.string().transform(pwd => hashSync(pwd, 10)).optional(),
  email: yup.string().email().optional(),
  phone: yup.string().max(11).min(8).optional(),
  age: yup.number().optional(),
  address: yup.string().optional(),
});

export default updateUserSchema;