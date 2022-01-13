import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const CartList = (props) => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => (total += item.totalprice),
    0
  );

  return (
    <div>
      <div className="head mb-5 d-flex justify-content-between">
        <h2 className="ml-5 text-left text-white">
          <Link to="/React-Book-Shopping" className="text-white">
            Book List
          </Link>
        </h2>
        <h2 className="mr-5 text-right text-white">
          Total Amount of Basket: &#8378; {totalPrice.toFixed(2)}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {cart.map((book, i) => (
            <Cart
              key={i}
              book={book}
              idx={i}
              bookName={book.name}
              bookAuthor={book.author}
              bookPrice={book.price}
              bookTotalPrice={book.totalprice}
              bookImg={book.image}
              props={props}
              bookid={book.id}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default CartList;
