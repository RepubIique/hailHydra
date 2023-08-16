import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navigation.css'

export const Navigation = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    const navigate = useNavigate()

    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    }

    const handleNavLinkClick = (sectionId) => {
        navigate('/') // Navigate to the home page
        setTimeout(() => {
            const section = document.getElementById(sectionId)
            if (section) section.scrollIntoView({ behavior: 'smooth' })
        }, 0)
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            id="menu"
            className="bg-body-tertiary"
            expanded={menuActive}
        >
            <Container>
                <Navbar.Brand href="#header">
                    <img alt="Company Logo" src="/img/flogo.png" height="60" />
                </Navbar.Brand>
                <button
                    onClick={handleMenuClick}
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
                    <Nav navbarScroll className="ml-auto">
                        <Nav.Link
                            onClick={() => handleNavLinkClick('services')}
                        >
                            Services
                        </Nav.Link>
                        <Link className="nav-link" to="/product">
                            Products
                        </Link>
                        <Nav.Link onClick={() => handleNavLinkClick('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleNavLinkClick('portfolio')}
                        >
                            Portfolio
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleNavLinkClick('testimonials')}
                        >
                            Clients
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavLinkClick('team')}>
                            Team
                        </Nav.Link>
                        <Nav.Link onClick={() => handleNavLinkClick('contact')}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
