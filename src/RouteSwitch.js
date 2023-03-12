import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from "./components/content/homePage/HomePage";
import ShopPage from './components/content/shopPage/ShopPage';
import ItemPage from './components/content/shopPage/itemPage/ItemPage';
import CheckoutPage from './components/content/checkoutPage/CheckoutPage';

export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:id" element={<ItemPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    </BrowserRouter>
  );
};