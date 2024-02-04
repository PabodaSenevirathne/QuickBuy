import React, { useState } from 'react';
import '../styles/Product.css';

function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product"> {/* Apply 'product' class */}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
