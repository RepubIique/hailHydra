import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const ProductBreadcrumb = ({}) => {
    const { productName, variantName, subVariantName } = useParams()

    return (
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>
                <h2>Product</h2>
            </Breadcrumb.Item>
            {productName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{ to: `/products/${productName}` }}
                >
                    <h2>{productName}</h2>
                </Breadcrumb.Item>
            )}
            {variantName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{
                        to: `/products/${productName}/${variantName}`,
                    }}
                >
                    <h2>{variantName}</h2>
                </Breadcrumb.Item>
            )}
            {subVariantName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{
                        to: `/products/${productName}/${variantName}/${subVariantName}`,
                    }}
                >
                    <h2>{subVariantName}</h2>
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    )
}
