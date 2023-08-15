import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/product.css'

export const Product = (props) => {
    return (
        <div id="product" className="text-center">
            <Container className="steel-section">
                <Row>
                    <Col>
                        <div className="section-title">
                            <h2>Products</h2>
                            <p>
                                Browse, shop or get a quote on over 2,000 steel
                                products right here. Select from the products
                                below and start your online steel order or
                                quote.
                            </p>
                            <p>
                                We help you get the right steel for your next
                                project here online or Contact Us with any
                                questions.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {props.data
                        ? props.data.map((product, index) => (
                              <Col
                                  key={`${product.name}-${index}`}
                                  className="products"
                              >
                                  <Card
                                      className="card"
                                      style={{ width: '15rem', height: '100%' }}
                                      border="white"
                                  >
                                      <Card.Img
                                          className="product-img"
                                          variant="top"
                                          src={product.image}
                                      />
                                      <Card.Body className="product-body">
                                          <Card.Title>
                                              {product.name}
                                          </Card.Title>
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
