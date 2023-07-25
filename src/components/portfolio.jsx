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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        duis sed dapibus leonec.
                    </p>
                </div>
                <Row>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Col
                                  key={`${d.title}-${i}`}
                                  lg={4} // for larger screens
                                  md={4} // for medium screens
                                  sm={4} // for small screens
                              >
                                  <ImageComponent
                                      title={d.title}
                                      largeImage={d.largeImage}
                                      smallImage={d.smallImage}
                                  />
                              </Col>
                          ))
                        : 'Loading...'}
                </Row>
            </Container>
        </div>
    )
}
