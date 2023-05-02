import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-5" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique metus ac dui consectetur, at lobortis arcu rhoncus.</p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Email: info@example.com</p>
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