import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../helper/validation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../helper/redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = (data) => {
    dispatch(loginUser(data));
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isAuthenticated", true);
    Navigate("/list");
  };

  const isAuthed = useSelector((state) => state.counter.isAuthenticated);

  useEffect(() => {
    if (isAuthed) {
      Navigate("/list");
    }
  }, [isAuthed]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <Field type="password" name="password" placeholder="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}{" "}
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
