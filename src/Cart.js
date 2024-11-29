import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>
                  Quantity:{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item, parseInt(e.target.value))
                    }
                  />
                </p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
