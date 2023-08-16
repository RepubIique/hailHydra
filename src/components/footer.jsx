import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Company Name</h5>
                        <p>
                            Address Line 1<br />
                            Address Line 2<br />
                            City, State, ZIP
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a href="/#services">Services</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <br />
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <br />
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p>
                            &copy; {new Date().getFullYear()} Company Name. All
                            rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
