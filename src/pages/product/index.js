import React, { useState } from "react";
import List from "./list";
import Add from "./add";
import { useSelector } from "react-redux";

const Index = () => {
  const [page, setPage] = useState("list");
  const productList = useSelector((state) => state?.counter?.productList);

  return (
    <React.Fragment>
      {(() => {
        if (page == "list") {
          return <List selectPage={setPage} productList={productList} />;
        } else if (page == "add") {
          return <Add selectPage={setPage} productList={productList} />;
        }
      })()}
    </React.Fragment>
  );
};

export default Index;
