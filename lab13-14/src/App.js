import './App.css';
import React from 'react'
// import ProductContext from "./ProductContext.js"
import ProductListing from "./ProductListing"
import ProductProvider from "./ProductProvider";
import AddProduct from './AddProduct';

export default class App extends React.Component {
  state = {};
  
  render() {
    return (
      <div className="App container-fluid">
        <ProductProvider>
            <ProductListing/>
            <AddProduct />
        </ProductProvider>
      </div>
    );
  }

}
