import React from 'react'

export const ProductCard = ({ item, onClick, meta }) => (
    <button type="button" className="product-card" onClick={onClick}>
        <span className="product-card__media">
            <img src={item.image} alt={item.name} loading="lazy" />
        </span>
        <span className="product-card__body">
            <span className="product-card__title">{item.name}</span>
            {meta ? <span className="product-card__meta">{meta}</span> : null}
        </span>
    </button>
)
