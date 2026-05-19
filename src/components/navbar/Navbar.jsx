import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import { useEffect, useState, useContext, useRef } from "react";
import toast from "react-hot-toast";
import Searchmodal from "./Searchmodal";

function Navbar() {
  const [modal, setModal] = useState(false);
  const { token, setToken, productData, cartCount } = useContext(DataContext);
  const navigate = useNavigate();
  const modalRef = useRef();
  const [navmodal, setNavodal] = useState(false);

  // Wishlist soni — faqat token bo'lsa hisoblaydi
  const wishlistCount = token
    ? productData?.filter((p) => p.is_liked)?.length || 0
    : 0;
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setModal(false);
    toast.success("Tizimdan chiqdingiz ✅");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav>
      <div className="navbar1">
        <div className="navbar">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="/">ShopNow</a>
          </p>
          <div className="select">
            <select>
              <option>English</option>
              <option>O'zbek</option>
              <option>Русский</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="container">
          <div className="components">
            <div className="logo">
              <Link to="/">
                <h1>Exclusive</h1>
              </Link>
            </div>
            <div className="pages">
              <ul>
                <li>
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="search">
              <div className="InputContainer">
                <input
                  placeholder="Search"
                  id="input"
                  className="input"
                  name="text"
                  type="text"
                  readOnly
                  onClick={() => setNavodal(true)}
                  onFocus={() => setNavodal(true)}
                />

                <label className="labelforsearch" htmlFor="input">
                  <svg className="searchIcon" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
              </div>
              <Link to={"/wishlist"} className="nav-icon-wrap">
                <FaRegHeart className="hearttt" title="wishlist" />
                {wishlistCount > 0 && (
                  <span className="nav-badge">{wishlistCount}</span>
                )}
              </Link>
              <Link to={"/cart"} className="nav-icon-wrap">
                <FaCartShopping className="carttt" title="cart" />
                {cartCount > 0 && (
                  <span className="nav-badge">{cartCount}</span>
                )}
              </Link>
              {token ? (
                <FaRegUser
                  title="user"
                  className="user"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal(true);
                  }}
                />
              ) : (
                ""
              )}

              {modal && (
                <div className="overlay" onClick={() => setModal(false)}>
                  <div
                    className="modal"
                    onClick={(e) => e.stopPropagation()}
                    ref={modalRef}
                  >
                    <div className="mod">
                      <img src="/imgs/userrr.svg" alt="" />
                      <NavLink to={"/accaunt"} onClick={() => setModal(false)}>
                        <p className="mod-text">Manage My Account</p>
                      </NavLink>
                    </div>

                    <div className="mod">
                      <img src="/imgs/icon-mallbag.svg" alt="" />
                      <p>My Order</p>
                    </div>

                    <div className="mod">
                      <img src="/imgs/icon-cancel.svg" alt="" />
                      <p>My Cancellations</p>
                    </div>

                    <div className="mod">
                      <img src="/imgs/Icon-Reviews.svg" alt="" />
                      <p>My Reviews</p>
                    </div>

                    <div className="mod" onClick={logout}>
                      <img src="/imgs/Icon-logout.svg" alt="" />
                      <p>Logout</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Searchmodal navmodal={navmodal} setNavodal={setNavodal} />
    </nav>
  );
}

export default Navbar;
