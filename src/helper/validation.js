import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const addSchema = Yup.object().shape({
  id: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
});

export const CategoriesAddSchema = Yup.object().shape({
  categories: Yup.string()
    .min(1, "Too Short!")
    .max(5, "Too Long!")
    .required("Required"),
});
