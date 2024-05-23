import React from "react";
import { addSchema } from "../../helper/validation";
import { Formik, Form, Field } from "formik";
import { productJson } from "../../helper/product";
import { addProduct } from "../../helper/redux/store";
import { useDispatch, useSelector } from "react-redux";

const Add = (props) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state?.counter?.categoriesList);
  console.log(categoriesList);

  const initialValues = {
    id: "",
    name: "",
    price: "",
    category: "",
  };

  const handleLogin = (data) => {
    console.log(data);
    const newProduct = {
      id: data?.id,
      name: data?.name,
      price: data?.price,
      category: data?.category,
    };
    dispatch(addProduct({ ...newProduct, id: props?.productList?.length + 1 }));
    props?.selectPage("list");
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

            <Field as="select" name="category">
              {categoriesList?.map((_a, i) => (
                <option value={_a} key={i}>
                  {_a}
                </option>
              ))}
            </Field>
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Add;
