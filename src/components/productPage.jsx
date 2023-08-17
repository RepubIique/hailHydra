import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/product.css'
import { ProductBreadcrumb } from './productBreadcrumbs'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductPage = (props) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentVariant, setCurrentVariant] = useState(null)
    const [currentSubVariant, setCurrentSubVariant] = useState(null)
    const navigate = useNavigate()
    const { productName, variantName, subVariantName } = useParams()

    const handleProductClick = (product) => {
        setCurrentProduct(product)
        setCurrentVariant(null)
        setCurrentSubVariant(null)
        navigate(`/products/${product.name}`)
    }

    const handleVariantClick = (variant) => {
        setCurrentVariant(variant)
        setCurrentSubVariant(null)
        navigate(`/products/${currentProduct.name}/${variant.name}`)
    }

    const handleSubVariantClick = (subVariant) => {
        setCurrentSubVariant(subVariant)
        navigate(
            `/products/${currentProduct.name}/${currentVariant.name}/${subVariant.name}`
        )
    }

    useEffect(() => {
        if (props.data) {
            const product = props.data.find((p) => p.name === productName)
            setCurrentProduct(product)

            if (variantName && product) {
                const variant = product.variants.find(
                    (v) => v.name === variantName
                )
                setCurrentVariant(variant)
            }

            if (subVariantName && currentVariant) {
                const subVariant = currentVariant.variants.find(
                    (v) => v.name === subVariantName
                )
                setCurrentSubVariant(subVariant)
            }
        }
    }, [productName, variantName, subVariantName, props.data, navigate])

    return (
        <>
            {!props.data ? (
                <div>...Loading</div>
            ) : (
                <div id="product" className="text-center">
                    <Container className="steel-section">
                        <Row>
                            <Col>
                                <div className="section-title">
                                    <ProductBreadcrumb
                                        productName={currentProduct?.name}
                                        variantName={currentVariant}
                                        subVariantName={currentSubVariant}
                                    />
                                    <p>
                                        Browse, shop or get a quote on over
                                        2,000 steel products right here. Select
                                        from the products below and start your
                                        online steel order or quote.
                                    </p>
                                    <p>
                                        We help you get the right steel for your
                                        next project here online or Contact Us
                                        with any questions.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {currentSubVariant ? (
                                // Render sub-variant details here
                                <div>
                                    {/* Code to render the selected sub-variant details */}
                                </div>
                            ) : currentVariant ? (
                                // Render sub-variants of selected variant
                                currentVariant.variants.map(
                                    (subVariant, index) => (
                                        <Col key={index} className="products">
                                            <Card
                                                className="card"
                                                border="white"
                                                onClick={() =>
                                                    handleSubVariantClick(
                                                        subVariant
                                                    )
                                                }
                                            >
                                                <Card.Img
                                                    className="product-img"
                                                    variant="top"
                                                    src={subVariant.image}
                                                />
                                                <Card.Body className="product-body">
                                                    <Card.Title>
                                                        {subVariant.name}
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                )
                            ) : currentProduct ? (
                                // Render variants of selected product
                                currentProduct.variants.map(
                                    (variant, index) => (
                                        <Col key={index} className="products">
                                            <Card
                                                className="card"
                                                border="white"
                                                onClick={() =>
                                                    handleVariantClick(variant)
                                                }
                                            >
                                                <Card.Img
                                                    className="product-img"
                                                    variant="top"
                                                    src={variant.image}
                                                />
                                                <Card.Body className="product-body">
                                                    <Card.Title>
                                                        {variant.name}
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                )
                            ) : (
                                // Render product list
                                props.data?.map((product, index) => (
                                    <Col
                                        md={4}
                                        sm={2}
                                        key={`${product.name}-${index}`}
                                        className="products"
                                    >
                                        <Card
                                            className="card"
                                            border="white"
                                            onClick={() =>
                                                handleProductClick(product)
                                            }
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
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    )
}
