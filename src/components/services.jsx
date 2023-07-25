import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import '../styles/services.css';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <Container>
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Row>
          {props.data
            ? props.data.map((d, i) => (
                <Col md={4} key={`${d.name}-${i}`}>
                  {' '}
                  <Image src={d.img} roundedCircle className='services-img' />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </Col>
              ))
            : 'loading'}
        </Row>
      </Container>
    </div>
  );
};
