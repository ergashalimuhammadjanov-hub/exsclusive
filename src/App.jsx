import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { getCategory, getProducts, getUserInfo, getCart } from "./services";
import Addmodal from "./components/addtocardmodal/Addmodal";
import ProductDetail from "./components/productDetail/ProductDetail";
import Wishlist from "./components/wishlist/Wishlist";
import Accaunt from "./pages/accaunt/Accaunt";
import AllProducts from "./pages/allproducts/AllProducts";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
export const DataContext = createContext();
import { Toaster } from "react-hot-toast";
import FilterCategory from "./pages/category/FilterCategory";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  const [userInfo, setUserInfo] = useState();
  const [cartModal, setCartModal] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null,
  );

  const refreshCart = async () => {
    if (!localStorage.getItem("token")) { setCartCount(0); return; }
    try {
      const data = await getCart();
      console.log("refreshCart data:", data); // debug
      const items = Array.isArray(data) ? data
        : Array.isArray(data?.results)     ? data.results
        : Array.isArray(data?.items)       ? data.items
        : Array.isArray(data?.cart_items)  ? data.cart_items
        : [];
      // Har bir item ning quantity sini qo'shamiz (yoki shunchaki items.length)
      const total = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
      setCartCount(total);
    } catch (err) {
      console.error("refreshCart error:", err);
      setCartCount(0);
    }
  };
  const getData = () => {
    getCategory()?.then((info) => {
      setCategoryData(info);
    });

    getProducts()?.then((infos) => {
      infos && setProductData(infos);
    });

    getUserInfo().then((info) => {
      setUserInfo(info);
    });
  };

  useEffect(() => {
    getData();
    refreshCart();
  }, [token]);

  return (
    <>
      <DataContext.Provider
        value={{
          categoryData,
          productData,
          token,
          setToken,
          userInfo,
          setUserInfo,
          getData,
          cartModal,
          setCartModal,
          cartCount,
          refreshCart,
        }}
      >
        <Navbar />
        <Breadcrumb />
        <Addmodal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/accaunt" element={<Accaunt />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:id" element={<FilterCategory />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
