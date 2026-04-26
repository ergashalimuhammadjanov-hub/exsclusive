import "./Product.css";
import { baseUrl } from "../../services";
import { picture } from "framer-motion/client";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { daDK } from "@mui/material/locale";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductDetail from "../productDetail/ProductDetail";
import { GoHeart } from "react-icons/go";
function Product({ item }) {
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
          <div className="cardLike">
            <GoHeart />
          </div>
          <div className="eye">
            <FaEye />
          </div>

          <button
            className="cart"
            style={{ background: "black" }}
            onClick={(e) => {
              e.preventDefault(); // linkni to‘xtatadi
              e.stopPropagation(); // eventni to‘xtatadi
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
