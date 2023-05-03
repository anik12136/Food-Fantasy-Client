import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

  const {user} = useContext(AuthContext);

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
              <Nav.Link href="#deets">profile picture</Nav.Link>
              
                {!user? <Link to="./login"><button>log in</button></Link> :<Link ><button>log out</button></Link>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;