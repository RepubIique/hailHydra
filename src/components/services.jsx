import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/services.css'

export default function Services(props) {
    return (
        <div id="services" className="text-center">
            <Container>
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        Expertly delivering comprehensive hydraulic solutions,
                        from custom fabrication and precision milling to
                        innovative design and responsive maintenance services.
                    </p>
                </div>
                <Row>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Col md={4} key={`${d.name}-${i}`}>
                                  {' '}
                                  <img
                                      loading="lazy"
                                      src={d.img}
                                      srcSet={`${d.imgm} 400w, ${d.img} 1200w`}
                                      sizes="(max-width: 768px) 480px, 1200px"
                                      className="services-img"
                                      alt={d.alt}
                                  />
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
    )
}
