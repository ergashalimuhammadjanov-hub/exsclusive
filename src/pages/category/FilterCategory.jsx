import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterCategoryfunc } from "../../services";
import Product from "../../components/products/Product";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./FilterCategory.css";

function FilterCategory() {
  const { id } = useParams();
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    FilterCategoryfunc(id).then((info) => {
      setFilterData(info);
      setLoading(false);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="container">
      <div className="fillterData">
        {loading
          ? [1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <div key={index} className="filter-skeleton">
                <Stack spacing={1}>
                  <Skeleton
                    variant="rectangular"
                    width={220}
                    height={200}
                    sx={{ borderRadius: "8px" }}
                  />
                  <Skeleton variant="text" width={160} sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" width={100} sx={{ fontSize: "0.9rem" }} />
                </Stack>
              </div>
            ))
          : filterData?.map((item) => (
              <Product key={item.id} item={item} />
            ))}
      </div>
    </div>
  );
}

export default FilterCategory;
