import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../redux/actions/index.js";
import { Link } from "react-router-dom";

const Products = () => {

  const bookList = useSelector(state => state.bookList);
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="mb-5 mr-5 text-right text-white">
        <Link to="/React-Book-Shopping/cart" className="text-white">Basket <i className="fas fa-shopping-basket"></i></Link>
      </h2>
      <div className="container">
        <div className="row">
          {bookList.map(book => (
            <div className="col-4 book mb-25 mt-5" key={book.id}>
              <img className= "w-100 h-60" src={book.image} alt={book.name}/>
              <div className="mt-3">
                <h4 className="text-white">{book.name}</h4>
                <p className="text-white"><strong>Author:</strong>  {book.author}</p>
                <p className="text-white"><strong>Description:</strong> {book.description.substring(0, 155)}...</p>
                <p className="text-white"><strong>Price:</strong> &#8378; {book.price}</p>
                <button className="btn btn-success" onClick={() => dispatch(addBasket(book))}>+ Add Basket</button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
};

export default Products;
