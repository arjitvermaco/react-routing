import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      <Header setOpen={setOpen} />
      <Cart open={open} setOpen={setOpen} />
      <div className="pt-16">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </div>
  );
}
