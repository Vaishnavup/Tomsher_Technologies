import React from "react";
import { productJson } from "../../helper/product";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../helper/redux/store";

const List = (props) => {
  const dispatch = useDispatch();

  const productList = props?.productList;

  const Navigate = useNavigate();

  const handleView = (id) => {
    Navigate(`/list/${id}`);
  };
  const handleAdd = () => {
    props?.selectPage("add");
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
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
          {productList &&
            productList?.map((_a) => (
              <tr key={_a?.id}>
                <td>{_a?.id || "___"}</td>
                <td>{_a?.name || "___"}</td>
                <td>{_a?.price || "___"}</td>
                <td>{_a?.category || "___"}</td>
                <td>
                  <button onClick={() => handleView(_a?.id)}>view</button>
                  <button onClick={() => handleDeleteProduct(_a?.id)}>
                    Delete
                  </button>
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
