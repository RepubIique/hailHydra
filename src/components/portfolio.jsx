import { ImageComponent } from './image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/portfolio.css'

export const Portfolio = (props) => {
    return (
        <div id="portfolio" className="text-center">
            <Container>
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>
                        "Showcasing two decades of superior craftsmanship in
                        hydraulic solutions, spanning diverse sectors and
                        featuring innovative designs, precise manufacturing, and
                        consistent client satisfaction."
                    </p>
                </div>
                <Row>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Col key={`${d.title}-${i}`} lg={4} md={4} sm={4}>
                                  <ImageComponent
                                      title={d.title}
                                      image={d.image}
                                  />
                              </Col>
                          ))
                        : 'Loading...'}
                </Row>
            </Container>
        </div>
    )
}
