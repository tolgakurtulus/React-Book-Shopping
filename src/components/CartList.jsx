import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { updateBasket } from "../actions"
import { removeBasket } from "../actions"
import { addBasket } from "../actions"


const CartList = props => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.totalprice),
    0
  );

  return (
    <div>
      <div className="head mb-5 d-flex justify-content-between">
        <h2 className="ml-5 text-left text-white">
          <Link to="/React-Book-Shopping" className="text-white">Book List</Link>
        </h2>
        <h2 className="mr-5 text-right text-white">
          Total Amount of Basket: &#8378; {totalPrice.toFixed(2)}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {props.cart.map((book, i) => (
            <Cart 
            key={i} 
            book={book} 
            idx={i} 
            bookName={book.name} 
            bookAuthor={book.author}
            bookPrice={book.price}
            bookTotalPrice={book.totalprice}
            bookImg={book.image}
            props= {props}
            bookid= {book.id}
            />
          ))};
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  }
}

export default connect(mapStateToProps, { addBasket, updateBasket, removeBasket })(CartList);