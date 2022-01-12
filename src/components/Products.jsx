import React from "react";
import { connect } from "react-redux"
import { addBasket } from "../actions"
import { Link } from "react-router-dom";

const Products = props => {
  console.log(props);
  return (
    <div>
      <h2 className="mb-5 mr-5 text-right text-white">
        <Link to="/React-Book-Shopping/cart" className="text-white">Basket <i className="fas fa-shopping-basket"></i></Link>
      </h2>
      <div className="container">
        <div className="row">
          {props.bookList.map(book => (
            <div className="col-4 book mb-25 mt-5" key={book.id}>
              <img
                className= "w-100 h-60"
                src={book.image}
                alt={book.name}
              />
              <div className="mt-3">
                <h4 className="text-white">{book.name}</h4>
                <p className="text-white"><strong>Author:</strong>  {book.author}</p>
                <p className="text-white"><strong>Description:</strong> {book.description.substring(0, 155)}...</p>
                <p className="text-white"><strong>Price:</strong> &#8378; {book.price}</p>
                <button className="btn btn-success" onClick={() => props.addBasket(book)}>+ Add Basket</button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addBasket })(Products);
