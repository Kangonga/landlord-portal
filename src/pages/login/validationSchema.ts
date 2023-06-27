import * as yup from "yup";

export const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^0[0-9]{9}$/,
      "Phone number must start with 0 and have exactly 10 digits"
    )
    .required("Phone number is required"),
  password: yup.string().required("Password is required"),
});
