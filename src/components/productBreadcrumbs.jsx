import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const ProductBreadcrumb = () => {
    const { productName, variantName, subVariantName } = useParams()

    return (
        <Breadcrumb className="breadcrumbs">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>
                Product
            </Breadcrumb.Item>
            {productName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{ to: `/products/${productName}` }}
                >
                    {productName}
                </Breadcrumb.Item>
            )}
            {variantName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{
                        to: `/products/${productName}/${variantName}`,
                    }}
                >
                    {variantName}
                </Breadcrumb.Item>
            )}
            {subVariantName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{
                        to: `/products/${productName}/${variantName}/${subVariantName}`,
                    }}
                >
                    {subVariantName}
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    )
}
