import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Navbar />
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
