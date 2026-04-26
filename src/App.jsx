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
import { getCategory, getProducts } from "./services";
import Addmodal from "./components/addtocardmodal/Addmodal";
import ProductDetail from "./components/productDetail/ProductDetail";
import Wishlist from "./components/wishlist/Wishlist";
import Accaunt from "./pages/accaunt/Accaunt";
import AllProducts from "./pages/allproducts/AllProducts";
import Cart from "./pages/cart/Cart";
export const DataContext = createContext();

function App() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  useEffect(() => {
    getCategory()?.then((info) => {
      setCategoryData(info);
    });

    getProducts()?.then((infos) => {
      infos && setProductData(infos);
    });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ categoryData, productData }}>
        <Navbar />
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
        </Routes>
        <Footer />
      </DataContext.Provider>
    </>
  );
}

export default App;
