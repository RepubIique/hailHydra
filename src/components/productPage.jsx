import { Container, Row, Col, Card } from 'react-bootstrap'

export const ProductPage = ({ props }) => (
    <Container>
        <Row>
            <Col>
                <img loading="lazy" src={props.image} alt={props.alt} />
            </Col>
            <Col>
                <h2>{props.name}</h2>
                <p>{props.overview}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Key Features</h3>
                <ul>
                    {props.keyFeatures.map((feature, index) => (
                        <li key={index}>
                            <strong>{feature.name}: </strong>
                            {feature.description}
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Common Applications</h3>
                <ul>
                    {props.commonApplication.map((application, index) => (
                        <li key={index}>{application}</li>
                    ))}
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Availability</h3>
                <p>{props.availability}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Conclusion</h3>
                <p>{props.conclusion}</p>
            </Col>
        </Row>
    </Container>
)
