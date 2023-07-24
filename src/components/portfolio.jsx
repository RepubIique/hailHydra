import { ImageComponent } from './image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Portfolio = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <Container>
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Row>
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <Col key={`${d.title}-${i}`} sm={6} md={4} lg={4}>
                    <ImageComponent
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </Col>
                ))
              : 'Loading...'}
          </div>
        </Row>
      </Container>
    </div>
  );
};
