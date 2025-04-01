import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: 20 },
  { id: 2, name: "Product B", price: 35 },
  { id: 3, name: "Product C", price: 50 },
];

const OrderPage = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between p-4 border rounded-lg shadow"
          >
            <span>{product.name} - ${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Link
        to="/checkout"
        className="block text-center mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Go to Checkout
      </Link>
    </div>
  );
};

export default OrderPage;


