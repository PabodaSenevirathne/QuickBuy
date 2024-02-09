// ProductDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css'; // Import the CSS file

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    // if (product) {
    //   addToCart(product, quantity);
    // }
    console.log("product" + product);
    const pro = {...product, quantity};

    console.log("pro" + pro);
    addToCart(pro);
  };

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-detail">
      {product && (
        <div className="product-detail-container">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <div className="quantity-input">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
            />
            <button onClick={() => handleAddToCart(product.id)} className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;