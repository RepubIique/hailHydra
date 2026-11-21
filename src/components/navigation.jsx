import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faMapMarker,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/navigation.css'

const NAV_ITEMS = [
    { type: 'section', id: 'services', label: 'Services' },
    { type: 'route', to: '/products', label: 'Products' },
    { type: 'section', id: 'about', label: 'About' },
    { type: 'section', id: 'portfolio', label: 'Portfolio' },
    { type: 'section', id: 'testimonials', label: 'Clients' },
    { type: 'section', id: 'team', label: 'Team' },
    { type: 'section', id: 'contact', label: 'Contact' },
]

export const Navigation = ({ contact }) => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close the mobile panel whenever the route changes
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const goToSection = (sectionId) => {
        setOpen(false)
        const scroll = () => {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        // Section anchors only exist on the home route
        if (pathname !== '/') {
            navigate('/')
            window.setTimeout(scroll, 80)
        } else {
            scroll()
        }
    }

    const phone = contact?.phone
    const email = contact?.email

    return (
        <>
            <div className="utility-bar">
                <Container>
                    <div className="utility-bar__inner">
                        <div className="utility-bar__group">
                            {phone && (
                                <a
                                    className="utility-bar__item"
                                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                                >
                                    <FontAwesomeIcon icon={faPhone} />
                                    {phone}
                                </a>
                            )}
                            {email && (
                                <a
                                    className="utility-bar__item"
                                    href={`mailto:${email}`}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    {email}
                                </a>
                            )}
                        </div>
                        <span className="utility-bar__item utility-bar__address">
                            <FontAwesomeIcon icon={faMapMarker} />
                            Miri, Sarawak, Malaysia
                        </span>
                    </div>
                </Container>
            </div>

            <header
                className={`site-header ${
                    scrolled ? 'site-header--scrolled' : ''
                }`}
            >
                <Container>
                    <div className="site-header__inner">
                        <Link
                            to="/"
                            className="site-brand"
                            aria-label="Hydra Power Engineering — home"
                            onClick={() => setOpen(false)}
                        >
                            <img
                                src="/img/flogo.webp"
                                alt="Hydra Power Engineering"
                                height="46"
                            />
                        </Link>

                        <nav
                            className={`site-nav${open ? ' is-open' : ''}`}
                            aria-label="Main"
                        >
                            {NAV_ITEMS.map((item) =>
                                item.type === 'route' ? (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="site-nav__link"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className="site-nav__link"
                                        onClick={() => goToSection(item.id)}
                                    >
                                        {item.label}
                                    </button>
                                )
                            )}
                            {/* Mobile only — the desktop CTA lives beside the nav */}
                            <a
                                className="btn btn-brand site-nav__cta"
                                href="#contact"
                                onClick={() => setOpen(false)}
                            >
                                Request a quote
                            </a>
                        </nav>

                        <div className="site-header__actions">
                            <a
                                className="btn btn-brand site-header__cta-desktop"
                                href="#contact"
                            >
                                Request a quote
                            </a>
                            <button
                                type="button"
                                className={`menu-toggle ${
                                    open ? 'is-open' : ''
                                }`}
                                aria-label="Toggle navigation"
                                aria-expanded={open}
                                onClick={() => setOpen((v) => !v)}
                            >
                                <span />
                            </button>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}
