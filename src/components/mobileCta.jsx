import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const telHref = (value) => `tel:${(value || '').replace(/[^\d+]/g, '')}`

/**
 * Fixed action bar for small screens: a quote request and a direct call, the
 * two ways a workshop actually gets enquiries.
 *
 * It stays hidden while the hero's own "Request a quote" button is on screen.
 * Two identical calls to action a few centimetres apart is duplication rather
 * than persuasion, and it is the very first thing a visitor sees. The bar
 * slides in as soon as that button leaves the viewport, so the offer is never
 * more than a tap away once the hero has gone.
 *
 * Styling lives in style.css alongside the other shared rules.
 */
export const MobileCta = ({ phone }) => {
    const [shown, setShown] = useState(false)

    useEffect(() => {
        const heroCta = document.querySelector(
            '#header .hero__actions .btn-brand'
        )

        // Nothing to defer to (a product page has no hero button), or no
        // observer to watch with — show it straight away.
        if (!heroCta || typeof IntersectionObserver === 'undefined') {
            setShown(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setShown(!entry.isIntersecting))
            },
            { threshold: 0 }
        )

        observer.observe(heroCta)
        return () => observer.disconnect()
    }, [])

    return (
        <div className={`mobile-cta${shown ? ' is-visible' : ''}`}>
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
}
