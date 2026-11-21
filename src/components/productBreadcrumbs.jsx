import React from 'react'
import { Link } from 'react-router-dom'

export const ProductBreadcrumb = ({ product, variant }) => (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            <li className={`breadcrumb-item ${product ? '' : 'active'}`}>
                {product ? (
                    <Link to="/products">Steel catalogue</Link>
                ) : (
                    'Steel catalogue'
                )}
            </li>
            {product && (
                <li className={`breadcrumb-item ${variant ? '' : 'active'}`}>
                    {variant ? (
                        <Link
                            to={`/products/${encodeURIComponent(product.name)}`}
                        >
                            {product.name}
                        </Link>
                    ) : (
                        product.name
                    )}
                </li>
            )}
            {variant && (
                <li className="breadcrumb-item active">{variant.name}</li>
            )}
        </ol>
    </nav>
)
