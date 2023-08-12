import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap'
import '../styles/navigation.css'

export const Navigation = (props) => {
    const [activeKey, setActiveKey] = useState('#home')
    const [menuActive, setMenuActive] = useState(false)

    const handleMenuClick = (selectedKey) => {
        setMenuActive(!menuActive)
        if (selectedKey) setActiveKey(selectedKey)
    }

    const handleNavLinkClick = (selectedKey) => {
        handleMenuClick(selectedKey)
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            id="menu"
            className="bg-body-tertiary"
            expanded={menuActive} // Control the expanded state based on your custom toggle
        >
            <Container>
                <Navbar.Brand href="#header">
                    <img alt="Company Logo" src="/img/flogo.png" height="60" />
                </Navbar.Brand>
                <button
                    onClick={() => handleMenuClick()}
                    className={`McButton ${menuActive ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                    }}
                >
                    <b></b>
                    <b></b>
                    <b></b>
                </button>
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        activeKey={activeKey}
                        onSelect={(selectedKey) => setActiveKey(selectedKey)}
                        navbarScroll
                        className="ml-auto"
                    >
                        <Nav.Link
                            className="nav-link"
                            href="#services"
                            onClick={() => handleNavLinkClick('#services')}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="#about"
                            onClick={() => handleNavLinkClick('#about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="#portfolio"
                            onClick={() => handleNavLinkClick('#portfolio')}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="#testimonials"
                            onClick={() => handleNavLinkClick('#testimonials')}
                        >
                            Clients
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="#team"
                            onClick={() => handleNavLinkClick('#team')}
                        >
                            Team
                        </Nav.Link>
                        <Nav.Link
                            className="nav-link"
                            href="#contact"
                            onClick={() => handleNavLinkClick('#contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
