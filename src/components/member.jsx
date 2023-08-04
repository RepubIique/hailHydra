import React from 'react'
import { Col, Container, Row, Image, Card } from 'react-bootstrap'
import '../styles/team.css'

export const Member = (props) => {
    return (
        <div id="team" className="text-center">
            <Container>
                <Col md={{ span: 8, offset: 2 }} className="section-title">
                    <h2>Meet the Team</h2>
                    <p>
                        A highly skilled and dedicated team, leveraging decades
                        of combined experience to deliver superior quality and
                        innovation in hydraulic engineering and services.
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
                                  <Card border="white">
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
