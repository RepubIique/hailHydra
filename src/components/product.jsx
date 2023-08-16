import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/product.css'
import { ProductBreadcrumb } from './productBreadcrumbs'

export const Product = (props) => {
    return (
        <div id="product" className="text-center">
            <Container className="steel-section">
                <Row>
                    <Col>
                        <div className="section-title">
                            <ProductBreadcrumb title={'Products'} />
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
                                  md={4}
                                  sm={2}
                                  key={`${product.name}-${index}`}
                                  className="products"
                              >
                                  <Card className="card" border="white">
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
