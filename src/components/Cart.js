import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartsComponent } from "./cartCard";

const CartComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const totalBill = Object.values(cartItems).reduce(
    (total, item) => total + item.price / 100,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container-cart">
        {Object.keys(cartItems).map((key) => (
          <CartsComponent key={key} {...cartItems[key]} />
        ))}
      </div>

      <div className="total-bill">
        <h2>Total Bill: Rs{totalBill.toFixed(2)}</h2>
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartComponent;
