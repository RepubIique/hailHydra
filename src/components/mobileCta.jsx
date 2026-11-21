import React, { useCallback, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const telHref = (value) => `tel:${(value || '').replace(/[^\d+]/g, '')}`

/**
 * Fixed action bar for small screens. Offers a quote request and a direct
 * call — the two ways a workshop actually gets enquiries. Styling lives in
 * style.css alongside the other shared rules.
 */
export const MobileCta = ({ phone }) => (
    <div className="mobile-cta">
        <a className="btn btn-brand" href="#contact">
            Request a quote
        </a>
        {phone ? (
            <a
                className="btn btn-ghost mobile-cta__call"
                href={telHref(phone)}
                aria-label={`Call ${phone}`}
            >
                <FontAwesomeIcon icon={faPhone} />
            </a>
        ) : null}
    </div>
)
