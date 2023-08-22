import React, { useState, useRef, Suspense, useCallback } from 'react'
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarker,
    faPhone,
    faEnvelope,
    faFax,
} from '@fortawesome/free-solid-svg-icons'
import LazyGoogleMaps from './lazyLoadGoogleMaps'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'

const ContactInfo = React.memo(({ data }) => (
    <ListGroup>
        <ListGroup.Item>
            <h3>Contact Info</h3>
            <p>
                <span>
                    <FontAwesomeIcon icon={faMapMarker} /> Address:
                </span>
                {data ? data.address : 'loading'}
            </p>
        </ListGroup.Item>
        <ListGroup.Item>
            <p>
                <span>
                    <FontAwesomeIcon icon={faPhone} /> Phone:
                </span>{' '}
                {data ? data.phone : 'loading'}
            </p>
        </ListGroup.Item>
        <ListGroup.Item>
            <p>
                <span>
                    <FontAwesomeIcon icon={faFax} /> Fax:
                </span>{' '}
                {data ? data.fax : 'loading'}
            </p>
        </ListGroup.Item>
        <ListGroup.Item>
            <p>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} /> Email:
                </span>{' '}
                {data ? data.email : 'loading'}
            </p>
        </ListGroup.Item>
    </ListGroup>
))

export const Contact = (props) => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = useCallback(
        (e) => {
            const { target } = e
            const { name, value } = target

            setForm({
                ...form,
                [name]: value,
            })
        },
        [form]
    )

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault()
            setLoading(true)

            emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        to_name: 'HydraPower Engineering',
                        from_email: form.email,
                        to_email: 'hydrapowerenginfo@gmail.com',
                        message: form.message,
                    },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
        },
        [form]
    )

    return (
        <div id="contact" className="text-center">
            <Container>
                <Col md={{ span: 8, offset: 2 }} className="section-title">
                    <h2>Contact Us</h2>
                </Col>
                <Row>
                    <Suspense fallback={<div>Loading map...</div>}>
                        <LazyGoogleMaps />
                    </Suspense>
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
                        <ContactInfo data={props.data} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
