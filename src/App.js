import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
