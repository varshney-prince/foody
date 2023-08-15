import React, { useState, useEffect ,useContext} from "react";
import { COMMON_IMG_URL } from "../Config/config";
import UserContext from "../store/UserContext";

export const CardComponent = (props) => {
  const { name, cuisines, sla, cloudinaryImageId } = props.card;
  const { deliveryTime } = sla;
  const {user}=useContext(UserContext);


  const renderedTags = cuisines.slice(0, 5).map((cuisine, index) => (
    <div key={index} className="tag">
      {cuisine}
    </div>
  ));

  return (
    <div className={`card`}>

        <>
          <img src={COMMON_IMG_URL + cloudinaryImageId} alt="Dish Image" className="card-image"/>
          
          <div className="card-content">
            
            <h2 className="dish-title">{name}</h2>
            <div className="tags">{renderedTags}</div>
            <p className="delivery-time">Estimated Delivery Time: {deliveryTime} minutes</p>
            <p className="delivery-time">{user.name + " " + user.email }</p>
          
          </div>
          
        </>
      
    </div>
  );
};
