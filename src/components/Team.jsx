import React from 'react'
import { Col, Container, Row, Image, Card } from 'react-bootstrap'
import '../styles/team.css'

export const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <Container>
                <Col md={{ span: 8, offset: 2 }} className="section-title">
                    <h2>Meet the Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        duis sed dapibus leonec.
                    </p>
                </Col>
                <Row>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Col
                                  key={`${d.name}-${i}`}
                                  md={3}
                                  sm={6}
                                  className="team"
                              >
                                  <Card>
                                      <Image
                                          src={d.img}
                                          alt="..."
                                          className="team-img"
                                      />
                                      <Card.Body>
                                          <Card.Title>{d.name}</Card.Title>
                                          <Card.Text>{d.job}</Card.Text>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          ))
                        : 'loading'}
                </Row>
            </Container>
        </div>
    )
}
