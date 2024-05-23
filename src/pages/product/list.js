import React from "react";
import { productJson } from "../../helper/product";
import { useNavigate } from "react-router-dom";

const List = () => {
  const data = productJson?.products; // prodcut json data

  const Navigate = useNavigate();

  const handleView = (id) => {
    Navigate(`/list/${id}`);
  };
  const handleAdd = () => {
    Navigate(`/listAdd`);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>price</th>
            <th>category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((_a) => (
              <tr key={_a?.id}>
                <td>{_a?.id || "___"}</td>
                <td>{_a?.name || "___"}</td>
                <td>{_a?.price || "___"}</td>
                <td>{_a?.category || "___"}</td>
                <td>
                  <button onClick={() => handleView(_a?.id)}>view</button>
                </td>
              </tr>
            ))}
        </tbody>
        <button onClick={() => handleAdd()}>ADD</button>
      </table>
    </>
  );
};

export default List;
