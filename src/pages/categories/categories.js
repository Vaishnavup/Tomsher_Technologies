import React, { useEffect, useState } from "react";
import { categoriesList } from "../../helper/categories";
import { json } from "react-router-dom";
import CategoriesAdd from "./categoriesAdd";
import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../../helper/redux/store";

const Categories = (props) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state?.counter?.categoriesList);

  const handleDeleteCategory = (index) => {
    dispatch(removeCategory(index));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {categoriesList &&
            categoriesList?.map((_a, i) => (
              <tr key={i}>
                <td>{i + 1 || "___"}</td>
                <td>{_a || "___"}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleDeleteCategory(i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button type="button" onClick={() => props?.selectPage("add")}>
        Add
      </button>
    </>
  );
};

export default Categories;
