import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from "./components/content/homePage/HomePage";
import ShopPage from './components/content/shopPage/ShopPage';
import ItemPage from './components/content/shopPage/itemPage/ItemPage';
import CheckoutPage from './components/content/checkoutPage/CheckoutPage';

export default function RouteSwitch({items, cart, addToCart, updateCart, clearCart, removeFromCart}) {
  return (
    <BrowserRouter>
        <Header cart={cart} />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage items={items}/>} />
            <Route path="/shop/:id" element={<ItemPage items={items} addToCart={addToCart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} updateCart={updateCart} clearCart={clearCart} removeFromCart={removeFromCart} />} />
        </Routes>
    </BrowserRouter>
  );
};