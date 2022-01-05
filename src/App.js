import { ShopContext, ShopProvider } from "./provider/shop-context";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/carts";
import Product from "./components/product/product-detail";
import Explore from "./components/explore/categories";
import Favorite from "./components/favorite/favorites";
import Root from "./components/main/root";

const App = () => {

  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Root/>}/>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;
