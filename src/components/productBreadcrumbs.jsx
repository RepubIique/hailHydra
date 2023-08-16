import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const ProductBreadcrumb = ({ title }) => {
    const { productName, variantName } = useParams()
    return (
        <Breadcrumb className="breadcrumbs">
            <Breadcrumb.Item linkProps={{ to: '/product' }}>
                <h2>{title}</h2>
            </Breadcrumb.Item>
            {productName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{ to: `/product/${productName}` }}
                >
                    {productName}
                </Breadcrumb.Item>
            )}
            {variantName && (
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{ to: `/product/${productName}/${variantName}` }}
                >
                    {variantName}
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    )
}
