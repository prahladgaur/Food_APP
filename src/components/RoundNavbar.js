import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoundedNavbar = () => {
    return (
       <Navbar  variant="primary" className="bg-primary mx-3 my-2 rounded">
        <Navbar.Brand href="#home" className="mx-2 bg-primary">Codectopus</Navbar.Brand>
        <Nav className=" d ml-auto  bg-primary">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">HTML</Nav.Link>
          <Nav.Link href="#services">CSS</Nav.Link>
          <Nav.Link href="#contact">JavaScript</Nav.Link>
        </Nav>
      </Navbar>
    );
  };
  export default RoundedNavbar;