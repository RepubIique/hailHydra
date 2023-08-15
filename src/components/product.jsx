import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/product.css'

export const Product = (props) => {
    return (
        <Container className="steel-section mt-5">
            <Row>
                <Col>
                    <h2>STEEL</h2>
                    <p>
                        Browse, shop or get a quote on over 2,000 steel products
                        right here. Select from the products below and start
                        your online steel order or quote.
                    </p>
                </Col>
            </Row>
            <Row>
                {props.data
                    ? props.data.map((product, index) => (
                          <Col
                              md={3}
                              sm={6}
                              key={`${product.name}-${index}`}
                              className="product"
                          >
                              <Card border="white">
                                  <Card.Img
                                      className="product-img"
                                      variant="top"
                                      src={product.image}
                                  />
                                  <Card.Body className="product-body">
                                      <Card.Title>{product.name}</Card.Title>
                                      <Card.Text>
                                          {product.description}
                                      </Card.Text>
                                  </Card.Body>
                              </Card>
                          </Col>
                      ))
                    : 'loading'}
            </Row>
        </Container>
    )
}
