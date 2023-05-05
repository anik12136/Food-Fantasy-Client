import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaRegUser } from 'react-icons/fa';
import './Header.css';
const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  // if (user) {
  //   const userName = user.displayName;
  //   const userPhoto = user.photoURL;

  // }

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

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
                <Link className="text-decoration-none text-white-50 ms-5" to="./blog">Blogs</Link>
              </Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link style={{ fontSize: '1.3rem' }} href="#deets">{
                user &&
                <div className="hover-container">
                  <img className='userImage rounded-circle' src={user.photoURL} alt="" />
                  <div className="hover-text">
                    <span>{user.displayName}</span>
                  </div>
                </div>
              }
              </Nav.Link>
              {
                !user &&
                <Nav.Link className='my-auto'>{!user ? <Link to="./login"><button className="btn btn-light">log in</button></Link> : <Link ><button onClick={handleLogOut} >log out</button></Link>}</Nav.Link>
              }
              {
                user && 
                <Nav.Link className='my-auto'>
                <Link ><button onClick={handleLogOut} className="btn btn-light">log out</button></Link>
                </Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;