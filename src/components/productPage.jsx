import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/productPage.css'

export const ProductPage = ({ props }) => (
    <Container className="product-container">
        <Row>
            <Col xs={12} md={6}>
                <img
                    loading="lazy"
                    src={props.image}
                    alt={props.alt}
                    className="product-image"
                />
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Card className="product-card">
                        <h2 className="product-title">{props.name}</h2>
                        <p>{props.overview}</p>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Card className="product-card">
                        <h3 className="product-title">Common Applications</h3>
                        <ul className="product-list">
                            {props.commonApplication.map(
                                (application, index) => (
                                    <li key={index}>{application}</li>
                                )
                            )}
                        </ul>
                    </Card>
                </Row>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Key Features</h3>
                    <ul className="product-list">
                        {props.keyFeatures.map((feature, index) => (
                            <li key={index}>
                                <strong>{feature.name}: </strong>
                                {feature.description}
                            </li>
                        ))}
                    </ul>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Availability</h3>
                    <p>{props.availability}</p>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Conclusion</h3>
                    <p>{props.conclusion}</p>
                </Card>
            </Col>
        </Row>
    </Container>
)
