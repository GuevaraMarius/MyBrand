import React from 'react'
import '../index.css';
import { Nav, Navbar } from 'react-bootstrap';
export const Navigation = (home,contact,blog) => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='navbar' variant='dark'>
        <Navbar.Brand href='' className='logo'>
          Guevara Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='home' className='links'>
              Home
            </Nav.Link>
            
            <Nav.Link href='contact' className='links'>
              Contact
            </Nav.Link>
            <Nav.Link href='blog' className='links'>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;