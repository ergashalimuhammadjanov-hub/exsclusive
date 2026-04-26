import { useContext, useEffect } from "react";
import { DataContext } from "../../App";
import "./AllProducts.css";
import Product from "../../components/products/Product";

function AllProducts() {
  const { productData } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!productData || productData.length === 0) {
    return (
      <div className="loading">
        <img
          src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif"
          alt="loading"
        />
      </div>
    );
  }

  return (
    <div className="allprbox">
      {productData.map((item) => (
        <Product key={item?.id} item={item} />
      ))}
    </div>
  );
}

export default AllProducts;
