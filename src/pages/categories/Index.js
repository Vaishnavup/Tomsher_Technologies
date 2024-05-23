import React, { useState } from "react";
import Categories from "./categories";
import CategoriesAdd from "./categoriesAdd";

const CategoriesIndex = () => {
  const [page, setPage] = useState("list");

  return (
    <React.Fragment>
      {(() => {
        if (page == "list") {
          return <Categories selectPage={setPage} />;
        } else if (page == "add") {
          return <CategoriesAdd selectPage={setPage} />;
        }
      })()}
    </React.Fragment>
  );
};

export default CategoriesIndex;
