import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((book) => (
          <li key={book.id}>
            {book.title} - ₦{book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
