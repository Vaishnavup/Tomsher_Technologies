import React from "react";
import { CategoriesAddSchema } from "../../helper/validation";
import { Formik, Form, Field } from "formik";

const CategoriesAdd = () => {
  const handleSubmit = (data) => {
    const categoriesList = JSON.parse(localStorage.getItem("categoriesList"));
    const categoriesListNew = categoriesList.push(data?.categories);
    const newValue = [...categoriesList, ...data?.categories];
    localStorage.setItem("categoriesList", JSON.stringify(newValue));
  };
  return (
    <Formik
      initialValues={{
        categories: "",
      }}
      validationSchema={CategoriesAddSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="categories" type="text" placeholder="Categories Add" />
          {errors.text && touched.text ? <div>{errors.text}</div> : null}
          <br />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CategoriesAdd;
