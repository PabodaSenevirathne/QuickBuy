import React from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
