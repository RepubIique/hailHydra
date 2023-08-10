import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import videoSourceMobile from '../assets/CNC-m.mp4'
import videoSourceDesktop from '../assets/CNC.mp4'
import '../styles/header.css'

export const Header = (props) => {
    const [videoSource, setVideoSource] = useState(videoSourceDesktop)

    useEffect(() => {
        setVideoSource(
            window.innerWidth <= 600 ? videoSourceMobile : videoSourceDesktop
        )

        const handleResize = () => {
            setVideoSource(
                window.innerWidth <= 600
                    ? videoSourceMobile
                    : videoSourceDesktop
            )
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header id="header">
            <div className="intro">
                <video autoPlay muted loop playsInline>
                    <source src={videoSource} type="video/mp4" />
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
                                    {props.data
                                        ? props.data.paragraph
                                        : 'Loading'}
                                </p>
                                <Button
                                    className="btn-lg button"
                                    href="#contact"
                                >
                                    Ask us how we can help
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>
    )
}
