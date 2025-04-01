import React, { useState } from 'react';
import cartData from "../data/cartsData.json"; 
const Cart = () => {
  // Sample cart items data
  
  const [cartItems, setCartItems] = useState(cartData);

  const updateTotal = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const increaseQuantity = (index) => {
    const newQuantity = cartItems[index].quantity + 1;
    updateTotal(index, newQuantity);
  };

  const decreaseQuantity = (index) => {
    if (cartItems[index].quantity > 1) {
      const newQuantity = cartItems[index].quantity - 1;
      updateTotal(index, newQuantity);
    }
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-container p-10 text-center">
      <h2 className="text-center text-2xl font-bold">Shopping Cart</h2>
      <table className="w-full border-collapse mt-2">
        <thead>
          <tr>
            <th className="p-3 text-center border-b border-gray-300">Product</th>
            <th className="p-3 text-center border-b border-gray-300">Price</th>
            <th className="p-3 text-center border-b border-gray-300">Quantity</th>
            <th className="p-3 text-center border-b border-gray-300">Total</th>
            <th className="p-3 text-center border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td className="product flex items-center">
                <img src="../../data/image/download (40).jfif" alt={item.name} className="w-24 object-contain mr-4 rounded-md"/>
                <div className="product-info text-left">
                  <p className="product-name font-bold">{item.name}</p>
                  <p className="product-type">{item.type}</p>
                </div>
              </td>
              <td className="price font-bold text-gray-800">៛{item.price.toFixed(2)}</td>
              <td>
                <div className="quantity flex items-center justify-center">
                  <button onClick={() => decreaseQuantity(index)} className="decrease border-none bg-green-500 text-white py-1 px-2 text-lg rounded hover:bg-green-600 transition duration-300">−</button>
                  <span className="quantity-number mx-2 text-lg">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)} className="increase border-none bg-green-500 text-white py-1 px-2 text-lg rounded hover:bg-green-600 transition duration-300">+</button>
                </div>
              </td>
              <td className="total-price font-bold text-gray-800">៛{(item.price * item.quantity).toFixed(2)}</td>
              <td><button onClick={() => removeItem(index)} className="remove bg-none border-none text-lg cursor-pointer text-red-500 hover:text-red-700">🗑</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;