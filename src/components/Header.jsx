import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Nav} from "react-bootstrap";
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
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

              <div className="position-relative ms-3">
                <input
                  type="text"
                  placeholder="Find your blood group"
                  className="form-control bg-transparent text-white rounded-5 p-3 ps-5 border border-white"
                  style={{ height: "45px", }}
                />
              </div>

              <RegistrationForm  />

              <DonatedForm/>

              {/* <Button className="btn bg-transparent rounded-5 ms-md-3 my-2 my-md-0">
                Register as a Donor
              </Button> */}
              {/* <Button className="btn bg-white text-black rounded-5 ms-2 my-2 my-md-0">
                Fill this after Donation
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header