import React from 'react';
import Product from '../components/Product';
import '../styles/Home.css';

function Home({ addToCart }) {
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 15, image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: 10, image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: 20, image: 'product5.jpg' },
  ];

  return (
    <div>
      <h2>Products</h2>
      <section className="cards">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} className="product-card" />
        ))}
      </section>
    </div>
  );
}

export default Home;
