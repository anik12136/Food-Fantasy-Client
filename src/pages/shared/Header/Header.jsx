import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <h2 className='text-white'>Food Fantasy</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <div className='nav-home'>
                <Link className="text-decoration-none text-white-50" to="/">Home</Link>
                <Link className="text-decoration-none text-white-50 ms-5" to="./blogs">Blogs</Link>
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile picture</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button>log in</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;