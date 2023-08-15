import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  PUNJABI,
  COMMON_IMG_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
} from "../Config/config";
import useResMenuData from "../utils/useMenu";
import { convert } from "../utils/helper";
import { useEffect } from "react";
import { addItem ,removeItem,clearCart} from "../store/cartSlice";
import { useDispatch } from "react-redux";
const RestraurentMenu = () => {
  const restaurantData = {
    name: "Punjabi Angithi",
    location: "Paschim Vihar, Delhi",
    image: PUNJABI,
    rating: 4.5, // Add the restaurant rating
    description: "Delicious North Indian cuisine in Paschim Vihar.", // Add the restaurant description
    menu: [
      {
        id: 1,
        name: "Butter Chicken",
        price: " ₹ 12.99",
        image: "https://via.placeholder.com/160x160",
      },
      {
        id: 2,
        name: "Paneer Tikka",
        price: " ₹ 10.99",
        image: "https://via.placeholder.com/160x160",
      },
      {
        id: 3,
        name: "Naan",
        price: " ₹ 2.49",
        image: "https://via.placeholder.com/160x160",
      },
      {
        id: 4,
        name: "Dal Makhani",
        price: " ₹ 9.99",
        image: "https://via.placeholder.com/160x160",
      },
      {
        id: 5,
        name: "Tandoori Roti",
        price: " ₹ 1.99",
        image: "https://via.placeholder.com/160x160",
      },
    ],
  };
  const { id } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    id,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
   const dispatch=useDispatch();
  // console.log(menuItems);

  function addMenu(item){
    // console.log(item);
    dispatch(addItem(item));
  }
  function clearMenu(){
    console.log("removed");
    dispatch(clearCart());
  }

  function removeMenu(){

    dispatch(removeItem());

  }

  return (
    <>
      <div className="restaurant-card">
        <div className="menu-card-container">
        <div className="restaurant-image">
          <img
            src={COMMON_IMG_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>
        <div className="restaurant-details">
          <h2 className="restaurant-name">{restaurant?.name}</h2>
          <p className="restaurant-location">{restaurant?.locality}</p>
          <div className="restaurant-rating">
            <span className="rating-icon">★</span>
            {restaurant?.avgRating}
          </div>
          <p className="restaurant-description">{restaurantData.description}</p>
        </div>
        </div>
       
        <div className="menu-container">
          <h3 className="menu-title">Popular Dishes</h3>
          <button className="add-to-cart-button" onClick={clearMenu} >Clear Cart</button>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id} className="menu-item">
                <div className="item-details">
                  <img
                    src={COMMON_IMG_URL + item?.imageId}
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="name-price">
                    <span className="item-name">{item?.name}</span>
                    <span className="item-price">{"Rs " +convert(item?.price)}</span>
                  </div>
                  
                </div>
                <div className="btn-container">
                <button className="add-to-cart-button" onClick={()=>{addMenu(item)}} >Add</button>
                <button className="add-to-cart-button" onClick={()=>{removeMenu()}} >Remove</button>
  
                </div>
               
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestraurentMenu;
