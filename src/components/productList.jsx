import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductPage } from './productPage'
import { ProductCard } from './productCard'
import { ProductBreadcrumb } from './productBreadcrumbs'
import '../styles/product.css'

const gradeCount = (item) => {
    const count = item.variants?.length || 0
    return `${count} grade${count === 1 ? '' : 's'} available`
}

export const ProductList = ({ data }) => {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentVariant, setCurrentVariant] = useState(null)
    const navigate = useNavigate()
    const { productName, variantName } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (!data) return
        const product = data.find((entry) => entry.name === productName) || null
        setCurrentProduct(product)

        if (variantName && product) {
            setCurrentVariant(
                product.variants.find(
                    (entry) => entry.name === variantName
                ) || null
            )
        } else {
            setCurrentVariant(null)
        }
    }, [productName, variantName, data])

    const heading = currentVariant
        ? currentVariant.name
        : currentProduct
          ? currentProduct.name
          : 'Steel we stock and machine'

    const items = currentProduct ? currentProduct.variants : data

    const handleSelect = (item) => {
        if (currentProduct) {
            navigate(
                `/products/${encodeURIComponent(
                    currentProduct.name
                )}/${encodeURIComponent(item.name)}`
            )
        } else {
            navigate(`/products/${encodeURIComponent(item.name)}`)
        }
    }

    return (
        <section id="product" className="catalogue">
            <div className="catalogue-head">
                <Container>
                    <p className="eyebrow">Steel catalogue</p>
                    <h1>{heading}</h1>
                    {!currentProduct && (
                        <p className="catalogue-head__lede">
                            We stock a wide variety of steels to meet every
                            requirement. Reach out for a bespoke steel and
                            we&rsquo;ll help you find the right grade for your
                            next project — contact us for a quote.
                        </p>
                    )}
                    <div className="catalogue-head__crumbs">
                        <ProductBreadcrumb
                            product={currentProduct}
                            variant={currentVariant}
                        />
                    </div>
                </Container>
            </div>

            <div className="catalogue-body">
                <Container>
                    {!data ? (
                        <p>Loading…</p>
                    ) : currentVariant ? (
                        <ProductPage variant={currentVariant} />
                    ) : (
                        <div className="product-grid">
                            {items.map((item, index) => (
                                <ProductCard
                                    key={`${item.name}-${index}`}
                                    item={item}
                                    meta={
                                        currentProduct ? null : gradeCount(item)
                                    }
                                    onClick={() => handleSelect(item)}
                                />
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </section>
    )
}
