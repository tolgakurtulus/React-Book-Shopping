import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BasketList from "./components/BasketList";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App mb-5">
      <header>
        <h1>The Best Books Basket</h1>
      </header>
      <Routes>
        <Route exact path="/React-Book-Shopping" element={<Products />} />
        <Route path="/React-Book-Shopping/cart" element={<BasketList />} />
      </Routes>
    </div>
  );
};

export default App;
