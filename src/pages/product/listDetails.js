import React from "react";
import { useParams } from "react-router-dom";
import { productJson } from "../../helper/product";

const ListDetails = () => {
  const { id } = useParams();
  const data = productJson?.products; // prodcut json data
  const findOne = data?.find((_a) => _a?.id == id); // single Data

  console.log(findOne);

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
