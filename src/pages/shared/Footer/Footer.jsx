import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer p-5 " style={{ backgroundColor: 'black', color: 'rgb(99, 98, 98)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Welcome to our website! We are excited to have you here and would like to take a moment to introduce ourselves. Our "About Us" section is where you can get to know us better, learn about our story, and understand our mission. So, let's dive in and discover who we are!</p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <Link className="FooterLink" to="/" >Home</Link>
              <br />
              <Link className="FooterLink" to="*" >Menu</Link>
              <br />
              <Link className="FooterLink" to="*" >Contact</Link>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Mirpur Main Street</p>
            <p>Dhaka, Mirpur</p>
            <p>Email: foodfantasy@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        &copy; {new Date().getFullYear()} Your Food Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;