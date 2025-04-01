import React from "react";
import { useCart } from "../pages/CartPage";

export default function CartContent() {
  const { cartItems } = useCart();
  const cartItemsdef = [
    { id: 1,
    title: "Default Book",
    price: 10.99,
    quantity: 1
    },

    {id: 2,
    title: "Another Book",  
    price: 12.99,
    quantity: 1,
    },
  ];
  
  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItemsdef.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}