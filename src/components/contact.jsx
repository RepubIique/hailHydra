import { useState } from 'react'
import React from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    ListGroup,
    Alert,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarker,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import GoogleMaps from './googleMaps'
import '../styles/contact.css'

const initialState = {
    name: '',
    email: '',
    message: '',
}

export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)
    const [file, setFile] = useState(null)
    const [alertMsg, setAlertMsg] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.size > 5242880) {
            // 5 MB in bytes
            setAlertMsg(
                'File is too large, please select a file less than 5MB.'
            )
            setFile(null) // reset the selected file
        } else {
            setFile(selectedFile)
            setAlertMsg('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message, file) // Now, the file is also logged
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
                            <Form.Group controlId="file">
                                <Form.Control
                                    label="Attach a file"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>
                            {alertMsg && (
                                <Alert variant="danger">{alertMsg}</Alert>
                            )}
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
            </Container>
        </div>
    )
}
