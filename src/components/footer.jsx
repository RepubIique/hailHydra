import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const COMPANY_LINKS = [
    { id: 'about', label: 'About us' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'team', label: 'Our team' },
]

const telHref = (value) => `tel:${(value || '').replace(/[^\d+]/g, '')}`

const Footer = ({ services = [], contact = {} }) => (
    <footer className="site-footer">
        <Container>
            <div className="footer-grid">
                <div className="footer-brand">
                    <img
                        src="/img/flogo.webp"
                        alt="Hydra Power Engineering"
                        height="46"
                    />
                    <p>
                        Engineering, design, fabrication and services from
                        Miri, Sarawak. In operation since 1994.
                    </p>
                </div>

                <div>
                    <h4>Services</h4>
                    <ul className="footer-list">
                        {services.map((service) => (
                            <li key={service}>
                                <a href="/#services">{service}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>Company</h4>
                    <ul className="footer-list">
                        <li>
                            <Link to="/products">Steel catalogue</Link>
                        </li>
                        {COMPANY_LINKS.map((link) => (
                            <li key={link.id}>
                                <a href={`/#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>Contact</h4>
                    <ul className="footer-list footer-list--plain">
                        {contact.address && <li>{contact.address}</li>}
                        {contact.phone && (
                            <li>
                                <a href={telHref(contact.phone)}>
                                    {contact.phone}
                                </a>
                            </li>
                        )}
                        {contact.fax && <li>Fax: {contact.fax}</li>}
                        {contact.email && (
                            <li>
                                <a href={`mailto:${contact.email}`}>
                                    {contact.email}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} HYDRAPOWER Engineering
                    &amp; Services. All rights reserved.
                </p>
                <p>Miri, Sarawak, Malaysia</p>
            </div>
        </Container>
    </footer>
)

export default Footer
