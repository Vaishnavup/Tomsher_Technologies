import React, { useEffect, useState } from "react";
import { categoriesList } from "../../helper/categories";
import { json } from "react-router-dom";

const Categories = () => {
  const data = categoriesList;

  const [categories, setCategories] = useState(data);

  useEffect(() => {
    const value = localStorage.getItem("categoriesList");
    setCategories(JSON)
    console.log(value);
  }, [data]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories?.map((_a, i) => (
              <tr key={i}>
                <td>{i + 1 || "___"}</td>
                <td>{_a || "___"}</td>
              </tr>
            ))}
        </tbody>
        <button>ADD</button>
      </table>
    </>
  );
};

export default Categories;
