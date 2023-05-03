import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaRegUser } from 'react-icons/fa';
const Header = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <h2 className='text-white'>Food Fantasy</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* <div className='nav-home'>
                <Link className="text-decoration-none text-white-50" to="/">Home</Link>
                <Link className="text-decoration-none text-white-50 ms-5" to="./blogs">Blogs</Link>
              </div> */}
              <Nav.Link href="#deets">
                <Link className="text-decoration-none text-white-50" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#deets">
                <Link className="text-decoration-none text-white-50 ms-5" to="./blogs">Blogs</Link>
              </Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link style={{fontSize:'1.3rem'}} href="#deets">{user ? <FaRegUser></FaRegUser> : 'profile picture'}</Nav.Link>
              <Nav.Link className='my-auto'>{!user ? <Link to="./login"><button>log in</button></Link> : <Link ><button>log out</button></Link>}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;