import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">

        {/* ── Exclusive ── */}
        <div className="footer_col">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>
              <img src="/imgs/Vector.svg" alt="send" />
            </button>
          </div>
        </div>

        {/* ── Support ── */}
        <div className="footer_col">
          <h4>Support</h4>
          <p>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* ── Account ── */}
        <div className="footer_col">
          <h4>Account</h4>
          <ul>
            <li>
              <Link to="/accaunt">My Account</Link>
            </li>
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/allproducts">Shop</Link>
            </li>
          </ul>
        </div>

        {/* ── Quick Link ── */}
        <div className="footer_col">
          <h4>Quick Link</h4>
          <ul>
            <li>
              <Link to="/about">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/contact">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* ── Download App ── */}
        <div className="footer_col">
          <h4>Download App</h4>
          <p className="small">Save $3 with App New User Only</p>
          <div className="app_box">
            <img src="/imgs/Qr Code.svg" alt="qr" />
            <div className="stores">
              <img src="/imgs/GooglePlay.svg" alt="Google Play" />
              <img src="/imgs/AppStore.svg" alt="App Store" />
            </div>
          </div>
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

      </div>

      <div className="footer_bottom">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
