import React, { useState } from 'react'

export const ImageComponent = React.memo(
    ({ title, image, imagem, description, alt }) => {
        // eslint-disable-next-line
        const [show, setShow] = useState(false)
        const handleShow = () => setShow(true)
        // const handleClose = () => setShow(false)

        return (
            <div className="portfolio-item">
                <div className="hover-bg">
                    <div className="hover-text" onClick={handleShow}>
                        <h4>{title}</h4>
                    </div>
                    <div className="image-container" onClick={handleShow}>
                        <img
                            loading="lazy"
                            src={image}
                            srcSet={`${imagem} 400w, ${image} 1200w`}
                            sizes="(max-width: 768px) 480px, 1200px"
                            className="portfolio-img"
                            alt={alt}
                        />
                    </div>
                    {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{ colour: '#3C80C1' }}>
                                {title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                loading="lazy"
                                src={image}
                                srcSet={`${imagem} 400w, ${image} 1200w`}
                                sizes="(max-width: 768px) 480px, 1200px"
                                className="portfolio-img"
                                alt={alt}
                                style={{ width: '100%' }}
                            />
                            <Modal.Body>{description}</Modal.Body>
                        </Modal.Body>
                    </Modal> */}
                </div>
            </div>
        )
    }
)
