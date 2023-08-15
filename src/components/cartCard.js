import React, { useState, useEffect, useContext } from "react";
import { COMMON_IMG_URL } from "../Config/config";
import UserContext from "../store/UserContext";

export const CartsComponent = (props) => {
  const { name, price, imageId, description } = props;

  return (
    <div className={`cart-card`}>
      <>
        <img
          src={COMMON_IMG_URL + imageId}
          alt="Dish Image"
          className="cart-card-image"
        />

        <div className="cart-card-content">
          <h2 className="cart-dish-title">{name}</h2>
          <div className="cart-tags">Rs {price / 100}</div>
        </div>
      </>
    </div>
  );
};
