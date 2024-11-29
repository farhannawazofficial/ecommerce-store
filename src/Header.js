import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Amazon Clone</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
      <div className="cart">
        <FaShoppingCart size={24} />
        <span className="cart-count">0</span>
      </div>
    </header>
  );
};

export default Header;
