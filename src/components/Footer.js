import React from "react";
import { ICON } from "../Config/config";
import { PIZZA } from "../Config/config";
import { BURGER } from "../Config/config";

export const FooterComponent = () => {
  return (
    <>
      <div className="content">
        {/* <section>
          <h2>Featured Dishes</h2>
          <div className="featured">
            <div className="dish">
              <img src={PIZZA} alt="Featured Dish 1" />
              <h3>Delicious Pizza</h3>
              <p>Enjoy our mouthwatering pizza with a variety of toppings.</p>
            </div>
            <div className="dish">
              <img src={BURGER} alt="Featured Dish 2" />
              <h3>Savory Burger</h3>
              <p>
                Indulge in our juicy burgers made from the finest ingredients.
              </p>
            </div>
          </div>
        </section> */}
        {/* <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to Food villa, your go-to destination for delectable
            dishes delivered right to your doorstep. We pride ourselves in
            offering a diverse menu of culinary delights prepared by experienced
            chefs.
          </p>
          <a href="about.html">Learn more</a>
        </section> */}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={ICON} alt="Food Delivery Logo" />
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Order Online</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="footer-text">
          &copy; 2023 Food Delivery. All rights reserved.
        </p>
      </footer>
    </>
  );
};
