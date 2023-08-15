import React from 'react';
import { useEffect } from 'react';


const ContactComponent = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         throw new Error('This is a custom error message.');
    //     },1000);
    // },[]);
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or inquiries, feel free to reach out to us. Our dedicated support team is here to assist you.</p>
        <div className="contact-details">
          <div className="contact-info">
            <h2>Address</h2>
            <p>123 Delicious Street,<br />Foodville City,<br />Yummyland</p>
          </div>
          <div className="contact-info">
            <h2>Email</h2>
            <p>varshneyprince20000@gmail.com</p>
          </div>
          <div className="contact-info">
            <h2>Phone</h2>
            <p>+91 7017796466</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
