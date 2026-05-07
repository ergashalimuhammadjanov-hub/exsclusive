import "./Wishlist.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../App";
import { baseUrl, delWishList } from "../../services";

import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

function Wishlist() {
  const { productData, getData } = useContext(DataContext);

  const likedProducts = productData?.filter((item) => item.is_liked);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="wishlist">
      {likedProducts?.length > 0 ? (
        likedProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-box">
              <MdDelete
                className="remove-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  delWishList(item.id).then(() => {
                    getData();
                    toast.success("Mahsulot sevimlilardan o'chirildi ✅");
                  });
                }}
              />

              <img src={`${baseUrl}${item?.pictures[0]}`} alt="" />
            </div>

            <button className="add-btn">
              <FaCartShopping />
              Add To Cart
            </button>

            <div className="info">
              <p className="title">{item?.title}</p>

              <p className="price">
                ${(item?.discount_price / 12000).toFixed(2)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-wishlist">
          <img
            src="https://www.emp.co.uk/on/demandware.static/Sites-GLB-Site/-/default/dw97bfbd0e/images/logos/empty-cart.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
