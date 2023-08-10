import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import videoSourceMobile from '../assets/CNC-m.webm';
import videoSourceDesktop from '../assets/CNC.webm'
import '../styles/header.css'

export const Header = (props) => {
    // Determine which video source to use based on viewport width
    const videoSource = window.innerWidth <= 600 ? videoSourceMobile : videoSourceDesktop;

    return (
        <header id="header">
            <div className="intro">
                <video autoPlay muted loop>
                    <source src={videoSource} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={8} className="intro-text">
                                <h1>
                                    {props.data ? props.data.title : 'Loading'}
                                    <span></span>
                                </h1>
                                <p>
                                    {props.data ? props.data.paragraph : 'Loading'}
                                </p>
                                <Button className="btn-lg button" href="#contact">
                                    Ask us how we can help
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>
    );
}