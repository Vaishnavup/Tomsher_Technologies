import React from "react";
import { addSchema } from "../../helper/validation";
import { Formik, Form, Field } from "formik";
import { productJson } from "../../helper/product";

const Add = () => {
  const initialValues = {
    id: "",
    name: "",
    price: "",
    category: "",
  };

  const handleLogin = (value) => {
    console.log(value);
    const data = productJson?.products; // prodcut json data
    const newProduct = {
      id: data?.id,
      name: data?.name,
      price: data?.price,
      category: data?.category,
    };
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="id" type="text" placeholder="ID" />
            {errors.id && touched.id ? <div>{errors.id}</div> : null}
            <br />

            <Field name="name" type="text" placeholder="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <br />

            <Field name="price" type="text" placeholder="price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <br />

            <Field name="category" type="text" placeholder="category" />
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      ;
    </>
  );
};

export default Add;
