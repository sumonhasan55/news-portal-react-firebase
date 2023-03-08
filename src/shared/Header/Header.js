import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const { user, logOutUser } = useContext(AuthContext)

  const handleSognOut = () => {
    logOutUser()
      .then(() => {
      })
      .catch((error) => {
        console.error(error)
      })

  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='text'><Navbar.Brand >E-News-Portal</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='nmenu'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
           
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} >
              <div className="d-flex">
                <div className="me-2 d-flex">
                  <>
                    {
                      user ?
                        <Button className='mx-3' variant="light" onClick={handleSognOut}>
                          LogOut
                        </Button>
                        :
                        <>
                          <Link to='/login'> <Button className='me-2' variant="light">LogIn</Button></Link>
                          <Link to='/register'><Button className='me-2' variant="light">SignUp</Button></Link>
                        </>
                    }
                  </>
                  {
                    user?.displayName ?
                      <p>
                        {user.displayName}
                      </p>
                      :
                      <p></p>
                  }
                </div>
                <div className="me-2">
                  {
                    user?.photoURL ?
                      <Image
                        roundedCircle
                        style={{ height: '30px' }}
                        src={user.photoURL}
                      ></Image>
                      :
                      <p><FaUser> </FaUser></p>
                  }
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;