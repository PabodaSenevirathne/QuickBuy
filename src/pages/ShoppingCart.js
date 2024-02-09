import React from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className='message'>Your shopping cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
