import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  cart.map(
    (product) => (product.quantity = product.quantity ? product.quantity : 1)
  );
  const totalQuantity = cart.reduce(
    (previous, product) => previous + product.quantity,
    0
  );
  const total = cart.reduce(
    (previous, product) => previous + product.price * product.quantity,
    0
  );
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h2>Order Summary</h2>
      <h2>Items: {totalQuantity}</h2>
      <p>Total Price: {total.toFixed(2)} </p>
      <p>Shipping: {shipping} </p>
      <p>Tax: {tax.toFixed(2)} </p>
      <p>Grand Total: {grandTotal.toFixed(2)} </p>
      {props.children}
    </div>
  );
};

export default Cart;
