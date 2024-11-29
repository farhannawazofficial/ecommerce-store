import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://via.placeholder.com/150/3498db/FFFFFF?text=Headphones",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://via.placeholder.com/150/1abc9c/FFFFFF?text=Smartphone",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://via.placeholder.com/150/e74c3c/FFFFFF?text=Laptop",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://via.placeholder.com/150/8e44ad/FFFFFF?text=Smartwatch",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
