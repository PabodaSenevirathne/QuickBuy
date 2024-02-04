// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Account from './pages/Account';

function App() {
  // Define state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
