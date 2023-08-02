import React, { useState, useRef } from 'react'
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarker,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import GoogleMaps from './googleMaps'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'

export const Contact = (props) => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'HydraPower Engineering',
                    from_email: form.email,
                    to_email: 'hydrapowerenginfo@gmail.com',
                    message: form.message,
                },
                process.env.EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false)
                    alert(
                        'Thank you. We will get back to you as soon as possible.'
                    )

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    })
                },
                (error) => {
                    setLoading(false)
                    alert('Ahh, something went wrong. Please try again.')
                }
            )
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
                        <Form onSubmit={handleSubmit} ref={formRef}>
                            <Row>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="name">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={form.name}
                                            required
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    {' '}
                                    <Form.Group controlId="email">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            placeholder="Email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <Form.Group controlId="message">
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={form.message}
                                    rows={4}
                                    placeholder="Message"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br />
                            <Button type="submit">
                                {loading ? 'Sending' : 'Send'}
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
                                        Address:
                                    </span>
                                    {props.data
                                        ? props.data.address
                                        : 'loading'}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faPhone} />{' '}
                                        Phone:
                                    </span>{' '}
                                    {props.data ? props.data.phone : 'loading'}
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                                        Email:
                                    </span>{' '}
                                    {props.data ? props.data.email : 'loading'}
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
