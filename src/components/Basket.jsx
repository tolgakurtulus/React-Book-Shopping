import React, { useState, useEffect } from 'react';
import { updateBasket, removeBasket } from "../redux/actions/index.js";
import { useDispatch } from "react-redux";

const Basket = ({ idx, bookName, bookAuthor, bookPrice, bookTotalPrice, bookImg, bookid}) => {

  const [currentselectValue, setCurrentSelectValue] = useState("1");
  const dispatch = useDispatch()

  const selectWork = (e) => {
    setCurrentSelectValue(e.target.value);
  };

  const selectValUpdate  = () => {
    dispatch(updateBasket(currentselectValue, bookid));
  };

  useEffect(() => {
    selectValUpdate();
  },[currentselectValue]);   // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="col-4 book mb-25 mt-5">
      <img className= "w-100 h-60" src={bookImg} alt={bookName}/>
      <div className="mt-3">
        <h4 className="text-white">{bookName}</h4>
        <p className="text-white"><strong>Author:</strong> {bookAuthor}</p>
        <p className="text-white"><strong>Price:</strong> &#8378; {bookPrice}</p>
        <p className="text-white"><strong>Total Price:</strong> &#8378; {bookTotalPrice.toFixed(2)}</p>
        <div className="d-flex">
          <button type="button" className="btn btn-danger rounded-0 mr-3 align-items-center justify-content-start" onClick={() => dispatch(removeBasket(idx))}>Remove</button>
          <div className="select-dropdown">
            <select className="qtyval" onChange={selectWork}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Basket;