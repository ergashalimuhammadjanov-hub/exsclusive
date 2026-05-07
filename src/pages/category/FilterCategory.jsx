import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterCategoryfunc } from "../../services";
import Product from "../../components/products/Product";
import "./FilterCategory.css";

function FilterCategory() {
  const { id } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    FilterCategoryfunc(id).then((info) => {
      setFilterData(info);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="container">
        <div className="fillterData">
      {filterData?.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
    </div>
  );
}

export default FilterCategory;
