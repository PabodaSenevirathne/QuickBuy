import React from 'react';
import Product from '../components/Product';
import CustomCarousel from '../components/CustomCarousel';

import '../styles/Home.css';

function Home({ addToCart }) {
  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'images/p.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'images/p-2.jpg' },
    { id: 3, name: 'Product 3', price: 15, image: 'images/p-1.jpg' },
    { id: 4, name: 'Product 4', price: 10, image: 'images/p-1.jpg' },
    { id: 5, name: 'Product 5', price: 20, image: 'images/p-1.jpg' },
    { id: 3, name: 'Product 6', price: 15, image: 'images/p-1.jpg' },
    { id: 4, name: 'Product 7', price: 10, image: 'images/p-1.jpg' },
    { id: 5, name: 'Product 8', price: 20, image: 'images/p-1.jpg' },
  ];

  const productsRow1 = products.slice(0, Math.ceil(products.length / 2));
  const productsRow2 = products.slice(Math.ceil(products.length / 2));

  return (
    <div>
      <CustomCarousel/>
      <h2>Best Sellers</h2>
      <div className="row">
        <div className="col">
          <section className="cards">
            {productsRow1.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} className="product-card" />
            ))}
          </section>
        </div>
        <h2>New Arrivals</h2>
        <div className="col">
          <section className="cards">
            {productsRow2.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} className="product-card" />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
