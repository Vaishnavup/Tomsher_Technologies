import React, { useEffect } from "react";
import { CategoriesAddSchema } from "../../helper/validation";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addCategory } from "../../helper/redux/store";

const CategoriesAdd = (props) => {
  const dispatch = useDispatch();

  const handleAddCategory = (data, { resetForm }) => {
    dispatch(addCategory(data?.categories));
    resetForm();
    props?.selectPage("list");
  };

  return (
    <Formik
      initialValues={{
        categories: "",
      }}
      validationSchema={CategoriesAddSchema}
      onSubmit={handleAddCategory}
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
