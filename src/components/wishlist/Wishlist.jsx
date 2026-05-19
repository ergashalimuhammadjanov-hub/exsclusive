import "./Wishlist.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../App";
import { baseUrl, delWishList } from "../../services";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaHeartBroken } from "react-icons/fa";
import toast from "react-hot-toast";

function Wishlist() {
  const { productData, getData, setCartModal } = useContext(DataContext);

  const likedProducts = productData?.filter((item) => item.is_liked);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleRemove = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    delWishList(id).then(() => {
      getData();
      toast.success("Sevimlilardan olib tashlandi");
    });
  };

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    setCartModal(item);
  };

  return (
    <div className="wl-page">
      <div className="wl-container">

        {/* Header */}
        <div className="wl-header">
          <h2 className="wl-title">
            My Wishlist
            {likedProducts?.length > 0 && (
              <span className="wl-count">{likedProducts.length}</span>
            )}
          </h2>
        </div>

        {likedProducts?.length > 0 ? (
          <div className="wl-grid">
            {likedProducts.map((item) => (
              <Link
                to={`/productdetail/${item.id}`}
                key={item.id}
                className="wl-card"
              >
                {/* O'chirish tugmasi */}
                <button
                  className="wl-remove"
                  title="Remove"
                  onClick={(e) => handleRemove(e, item.id)}
                >
                  <IoClose />
                </button>

                {/* Rasm */}
                <div className="wl-img-box">
                  <img
                    src={`${baseUrl}${item?.pictures?.[0]}`}
                    alt={item?.title}
                    className="wl-img"
                  />
                </div>

                {/* Add to Cart — hover da chiqadi */}
                <button
                  className="wl-cart-btn"
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  <FaCartShopping />
                  Add To Cart
                </button>

                {/* Ma'lumot */}
                <div className="wl-info">
                  <p className="wl-name">{item?.title}</p>
                  <div className="wl-prices">
                    <span className="wl-discount">
                      ${(item?.discount_price / 12000).toFixed(2)}
                    </span>
                    {item?.price !== item?.discount_price && (
                      <span className="wl-original">
                        ${(item?.price / 12000).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Bo'sh holat */
          <div className="wl-empty">
            <FaHeartBroken className="wl-empty-icon" />
            <h3>Your wishlist is empty</h3>
            <p>Save items you love by clicking the heart icon</p>
            <Link to="/" className="wl-empty-btn">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
