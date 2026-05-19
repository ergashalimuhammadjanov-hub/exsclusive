import "./Product.css";
import { baseUrl, addToWishlist, delWishList } from "../../services";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import toast from "react-hot-toast";

function Product({ item }) {
  const { getData, token, setCartModal } = useContext(DataContext);

  // Optimistic update — API javobini kutmasdan UI ni tez o'zgartirish
  const [liked, setLiked] = useState(item?.is_liked || false);
  const [loading, setLoading] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (loading) return;
    setLoading(true);

    // Optimistic: darhol UI ni o'zgartir
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      // Wishlistga qo'sh
      addToWishlist(item.id)
        .then(() => {
          getData();
          toast.success("Sevimlilarga qo'shildi ❤️");
        })
        .catch(() => {
          setLiked(!newLiked); // xato bo'lsa qaytarish
          toast.error("Xatolik yuz berdi");
        })
        .finally(() => setLoading(false));
    } else {
      // Wishlistdan o'chir
      delWishList(item.id)
        .then(() => {
          getData();
          toast.success("Sevimlilardan olib tashlandi");
        })
        .catch(() => {
          setLiked(!newLiked);
          toast.error("Xatolik yuz berdi");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="product_card">
      <Link to={`/productdetail/${item?.id}`}>
        <div className="card">
          <div className="imgBox">
            <img src={`${baseUrl}${item?.pictures[0]}`} />
          </div>

          <div className="content">
            <p className="itemtitle">{item?.title}</p>

            <div className="price_raiting">
              <div className="prices">
                <span className="discount_price">
                  ${(item?.discount_price / 12000).toFixed(2)}
                </span>
                <span className="price">
                  ${(item?.price / 12000).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="raiting">
              <FaStar className="star" />
              <span>{item?.stars}</span>
            </div>
          </div>

          {/* Like — faqat login qilingan bo'lsa ko'rinadi */}
          {token && (
            <div
              className={`cardLike ${liked ? "cardLike--liked" : ""}`}
              title={liked ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}
              onClick={handleLike}
            >
              {liked ? (
                <FaHeart className="like like--active" />
              ) : (
                <GoHeart className="like" />
              )}
            </div>
          )}

          {/* Ko'z — faqat login qilingan bo'lsa ko'rinadi */}
          {token && (
            <div className="eye" title="Ko'rish">
              <FaEye className="koz" />
            </div>
          )}

          <button
            className="cart"
            style={{ background: "black" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCartModal(item);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Product;
