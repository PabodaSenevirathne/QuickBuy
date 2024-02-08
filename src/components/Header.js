import React from 'react';
import logo from '../images/p-1.jpg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Your Logo" width="100" height="100" />
      </div>
      <div className="title">
        <h1>Welcome to Our Online Store</h1>
        <p>Your One-Stop Shop for Quality Products</p>
      </div>
    </header>
  );
}

export default Header;
