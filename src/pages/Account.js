import React, { useState } from 'react';
import '../styles/Account.css';

function Account() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    shippingAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Account Created Sucessfully:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Shipping Address: ${formData.shippingAddress}`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      shippingAddress: '',
    });
  };

  return (
    <div className="account-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="account-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <textarea id="shippingAddress" name="shippingAddress" value={formData.shippingAddress} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Account;
