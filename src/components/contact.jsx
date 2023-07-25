import { useState } from 'react'
import React from 'react'
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'

import {
    faMapMarker,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import GoogleMaps from './googleMaps'

const initialState = {
    name: '',
    email: '',
    message: '',
}

export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
    }

    return (
        <div id="contact" className="text-center">
            <Container>
                <Col md={{ span: 8, offset: 2 }} className="section-title">
                    <h2>Contact Us</h2>
                </Col>
                <Row>
                    <GoogleMaps />
                </Row>
                <Row>
                    <Col md={8}>
                        <div className="section-title">
                            <h2>Inquiries</h2>
                            <p>
                                For any inquiries, questions or commendations,
                                please call: +60 85-655 431 or fill out the
                                following form
                            </p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="name">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="email">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="message">
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={4}
                                    placeholder="Message"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }} className="contact-info">
                        <ListGroup>
                            <ListGroup.Item>
                                <h3>Contact Info</h3>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faMapMarker} />{' '}
                                        Address
                                    </span>
                                    {props.data
                                        ? props.data.address
                                        : 'loading'}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} /> Phone
                                    </span>{' '}
                                    {props.data ? props.data.phone : 'loading'}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                                        Email
                                    </span>{' '}
                                    {props.data ? props.data.email : 'loading'}
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="social">
                            <ul>
                                <li>
                                    <a
                                        href={
                                            props.data
                                                ? props.data.facebook
                                                : '/'
                                        }
                                    >
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={
                                            props.data
                                                ? props.data.twitter
                                                : '/'
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={
                                            props.data
                                                ? props.data.youtube
                                                : '/'
                                        }
                                    >
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
