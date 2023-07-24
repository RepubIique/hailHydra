import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navigation.css';

export const Navigation = (props) => {
  const [activeKey, setActiveKey] = useState('#home');
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      id="menu"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
          Hydra Power Engineering
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
            navbarScroll
            className="ml-auto"
          >
            <Nav.Link className="nav-link" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-link" href="#testimonials">
              Clients
            </Nav.Link>
            <Nav.Link className="nav-link" href="#team">
              Team
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
