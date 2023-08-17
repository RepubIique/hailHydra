import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../styles/product.css'
import { ProductBreadcrumb } from './productBreadcrumbs'
import { useNavigate, useParams } from 'react-router-dom'

const RenderCard = ({ item, onClick }) => (
    <Col className="products">
        <Card className="card" border="white" onClick={onClick}>
            <Card.Img className="product-img" variant="top" src={item.image} />
            <Card.Body className="product-body">
                <Card.Title>{item.name}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
)

export const ProductPage = (props) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentVariant, setCurrentVariant] = useState(null)
    const [currentSubVariant, setCurrentSubVariant] = useState(null)
    const navigate = useNavigate()
    const { productName, variantName, subVariantName } = useParams()

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
    }, [productName, variantName, subVariantName, props.data])

    const handleProductClick = (product) => {
        setCurrentProduct(product)
        setCurrentVariant(null)
        navigate(`/products/${product.name}`)
    }

    const handleVariantClick = (variant) => {
        setCurrentVariant(variant)
        navigate(`/products/${currentProduct.name}/${variant.name}`)
    }

    const handleSubVariantClick = (subVariant) => {
        navigate(
            `/products/${currentProduct.name}/${currentVariant.name}/${subVariant.name}`
        )
    }

    const renderItems = (items, clickHandler) =>
        items.map((item, index) => (
            <RenderCard
                key={index}
                item={item}
                onClick={() => clickHandler(item)}
            />
        ))

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
                                renderItems(
                                    currentVariant.variants,
                                    handleSubVariantClick
                                )
                            ) : currentProduct ? (
                                renderItems(
                                    currentProduct.variants,
                                    handleVariantClick
                                )
                            ) : (
                                renderItems(props.data, handleProductClick)
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    )
}
