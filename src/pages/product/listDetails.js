import React from "react";
import { useParams } from "react-router-dom";
import { productJson } from "../../helper/product";
import { useSelector } from "react-redux";

const ListDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state?.counter?.productList);
  const findOne = data?.find((_a) => _a?.id == id); // single Data

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {findOne && (
            <tr key={findOne?.id}>
              <td>{findOne?.id || "___"}</td>
              <td>{findOne?.name || "___"}</td>
              <td>{findOne?.price || "___"}</td>
              <td>{findOne?.category || "___"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ListDetails;
