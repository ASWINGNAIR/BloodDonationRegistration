import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Nav} from "react-bootstrap";
import { faDroplet} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm'
import DonatedForm from '../components/DonatedForm'


function Header() {
  
  return (
    <>
      <Navbar expand="md" className="bg-danger p-3  fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="">
          <Link to={'/'} style={{textDecoration:"none"}} ><h2 className='text-3xl'><FontAwesomeIcon icon={faDroplet} className="me-3" />Heart to Heart</h2></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#" className="text-white">
              </Nav.Link>

              

              <RegistrationForm  />

              <DonatedForm/>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header