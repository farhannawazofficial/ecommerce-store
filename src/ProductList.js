import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    image: "https://static3.webx.pk/files/19643/Images/sony-wh-ch720n-white-wireless-headphones-price-in-pakistan-19643-2088090-220524104415711.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    image: "https://bnwcollections.com/uploads/products/galleries/825aInfinix%20Smart%207-bnw-3_11zon.webp",
  },
  {
    id: 3,
    name: "Laptop",
    price: 999,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "https://dynamiteaccessories.pk/wp-content/uploads/2024/09/js-watch-7-ultra-smart-watch-price-in-pakistan.webp",
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
