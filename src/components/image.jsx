import React from 'react'
import { Image } from 'react-bootstrap'

export const ImageComponent = ({ title, image }) => {
    return (
        <div className="portfolio-item">
            <div className="hover-bg">
                {' '}
                <a href={image} title={title} data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                        <h4>{title}</h4>
                    </div>
                    <div className="image-container">
                        <Image
                            src={image}
                            className="portfolio-img"
                            alt={title}
                        />
                    </div>
                </a>{' '}
            </div>
        </div>
    )
}
