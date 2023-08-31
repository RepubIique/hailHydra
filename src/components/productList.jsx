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
    }, [productName, variantName, subVariantName, currentVariant, props.data])

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
        setCurrentSubVariant(subVariant)
        navigate(
            `/products/${currentProduct.name}/${currentVariant.name}/${subVariant.name}`
        )
    }

    const renderItems = (items, clickHandler) =>
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
                                            subVariantName={currentSubVariant}
                                        />
                                    </h2>

                                    {currentSubVariant ? (
                                        <div></div>
                                    ) : (
                                        <div>
                                            <p>
                                                Browse, shop or get a quote on
                                                over 2,000 steel products right
                                                here. Select from the products
                                                below and start your online
                                                steel order or quote.
                                            </p>
                                            <p>
                                                We help you get the right steel
                                                for your next project here
                                                online or Contact Us with any
                                                questions.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {currentSubVariant ? (
                                // Render sub-variant details here
                                <ProductPage props={currentSubVariant} />
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
