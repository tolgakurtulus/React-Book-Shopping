import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartList from "./components/CartList";
import Products from "./components/Products";

const App = props => {
  console.log(props.bookList);
  return (
    <div className="App mb-5">
      <header>
        <h1>The Best Books Basket</h1>
      </header>
      <Route exact path="/React-Book-Shopping" component={Products} />
      <Route path="/React-Book-Shopping/cart" component={CartList} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    bookList: state.bookList,
  }
}

export default connect(mapStateToProps)(App);