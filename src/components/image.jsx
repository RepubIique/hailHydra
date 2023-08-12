import React, { useState } from 'react'
import { Image, Modal } from 'react-bootstrap'

export const ImageComponent = ({ title, image, description, alt }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div className="portfolio-item">
            <div className="hover-bg">
                <div className="hover-text" onClick={handleShow}>
                    <h4>{title}</h4>
                </div>
                <div className="image-container" onClick={handleShow}>
                    <Image
                        loading="lazy"
                        src={image}
                        className="portfolio-img"
                        alt={alt}
                    />
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ colour: '#3C80C1' }}>
                            {title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image
                            loading="lazy"
                            src={image}
                            className="portfolio-img"
                            alt={alt}
                            style={{ width: '100%' }}
                        />
                        <Modal.Body>{description}</Modal.Body>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
