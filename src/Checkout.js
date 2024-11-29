import React from "react";

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => alert("Order placed successfully!")}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
