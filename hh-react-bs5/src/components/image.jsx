import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const ImageComponent = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {' '}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <Image src={smallImage} className="img-responsive" alt={title} />{' '}
        </a>{' '}
      </div>
    </div>
  );
};
