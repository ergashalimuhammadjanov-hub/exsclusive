import "./Product.css";
import { baseUrl, addToWishlist } from "../../services";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { DataContext } from "../../App";
import toast from "react-hot-toast";

function Product({ item }) {
  const { getData } = useContext(DataContext);
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

          <div
            className="cardLike"
            title="like"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              addToWishlist(item.id).then((info) => {
                console.log(info);
                getData();
                toast.success("Mahsulot sevimlilarga qo‘shildi ❤️");
              });
            }}
          >
            {item?.is_liked ? (
              <FcLike className="like" />
            ) : (
              <GoHeart className="like" />
            )}
          </div>

          <div className="eye" title="this ptoduct">
            <FaEye className="koz" />
          </div>

          <button
            className="cart"
            style={{ background: "black" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              addToWishlist(item.id).then((info) => {
                console.log(info);
              });
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
