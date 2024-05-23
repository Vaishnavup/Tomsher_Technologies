import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../helper/redux/store";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
    localStorage.clear();
    Navigate("/login");
  }, []);

  return <div>Logout</div>;
};

export default Logout;
