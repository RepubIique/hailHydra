import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductPage } from './productPage'
import { ProductCard } from './productCard'
import { ProductBreadcrumb } from './productBreadcrumbs'
import '../styles/product.css'

export const ProductList = (props) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentVariant, setCurrentVariant] = useState(null)
    const navigate = useNavigate()
    const { productName, variantName } = useParams()

    useEffect(() => {
        if (props.data) {
            const product = props.data.find((p) => p.name === productName)
            setCurrentProduct(product)

            if (variantName && product) {
                const variant = product.variants.find(
                    (v) => v.name === variantName
                )
                setCurrentVariant(variant)
            } else if (!variantName) {
                setCurrentVariant(null)
            }
        }
    }, [productName, variantName, props.data])

    const handleProductClick = (product) => {
        setCurrentProduct(product)
        navigate(`/products/${product.name}`)
    }

    const handleVariantClick = (variant) => {
        setCurrentVariant(variant)
        navigate(`/products/${currentProduct.name}/${variant.name}`)
    }

    const renderCard = (items, clickHandler) =>
        items.map((item, index) => (
            <ProductCard
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
                                    <h2>
                                        {' '}
                                        <ProductBreadcrumb
                                            productName={currentProduct?.name}
                                            variantName={currentVariant}
                                        />
                                    </h2>

                                    <div>
                                        <p>
                                            We stock vast variety of steels to
                                            meet every requirement. Reach out
                                            for a bespoke steel and we help you
                                            get the right steel for your next
                                            project. Please contact us or quote.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {currentVariant ? (
                                <ProductPage props={currentVariant} />
                            ) : currentProduct ? (
                                renderCard(
                                    currentProduct.variants,
                                    handleVariantClick
                                )
                            ) : (
                                renderCard(props.data, handleProductClick)
                            )}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    )
}
