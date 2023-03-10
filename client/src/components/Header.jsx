import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <>
      <Navbar className="bg-dark position-fixed w-100 " variant="light" expand="lg" style={{color:"white",opacity:"0.9"}}>
      <Container>
        <Navbar.Brand href="#home" className='text-light  fs-3 fw-bold'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto" className='justify-content-end'>
            <Link to="/" className='text-light me-3 mt-2 fs-5 fw-bold' style={{textDecoration:"none",}}>Home</Link>
            <Link to="/about" className='text-light me-3 mt-2 fs-5 fw-bold' style={{textDecoration:"none"}}>About</Link>
            <Link to="/services" className='text-light me-3 mt-2 fs-5 fw-bold' style={{textDecoration:"none"}}>Services</Link>
            <Link className="text-light me-3 mt-2 fs-5 fw-bold"><AccountCircleIcon fontSize="large" /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
