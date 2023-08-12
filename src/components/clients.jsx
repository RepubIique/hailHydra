import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/client.css'

export const Clients = (props) => {
    return (
        <div id="testimonials">
            <Container>
                <div className="section-title text-center">
                    <h2>What our clients say</h2>
                </div>
                <Row>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Col key={`${d.name}-${i}`} md={4}>
                                  <div className="testimonial">
                                      <div className="testimonial-image">
                                          {' '}
                                          <img
                                              loading="lazy"
                                              src={d.img}
                                              alt={d.alt}
                                              srcSet={`${d.imgm} 400w, ${d.img} 1200w`}
                                              sizes="(max-width: 768px) 480px, 1200px"
                                          />{' '}
                                      </div>
                                      <div className="testimonial-content">
                                          <p>"{d.text}"</p>
                                          <div className="testimonial-meta">
                                              {' '}
                                              - {d.name}{' '}
                                          </div>
                                      </div>
                                  </div>
                              </Col>
                          ))
                        : 'loading'}
                </Row>
            </Container>
        </div>
    )
}
