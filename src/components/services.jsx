import React from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import '../styles/services.css'

// The first two are the shop's core trades, so they take the large tiles and
// the rest sit beneath as a compact row. Deliberate hierarchy, not a uniform
// grid of six.
const FEATURE_COUNT = 2

export default function Services({ data }) {
    const revealRef = useReveal()
    const services = data || []

    return (
        <section id="services" className="section" ref={revealRef}>
            <Container>
                <div className="section-head section-head--split">
                    <p className="eyebrow">
                        <span className="eyebrow__num">01</span>
                        Capabilities
                    </p>
                    <h2>From design to delivery</h2>
                    <p className="section-head__lede">
                        Hydraulic cylinders, gear cutting and CNC machining,
                        product design and fabrication, maintenance and repair,
                        warranty support, quality control and material
                        sourcing.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            className={`service-cell ${
                                index < FEATURE_COUNT
                                    ? 'service-cell--feature'
                                    : 'service-cell--compact'
                            }`}
                            data-reveal
                            key={`${service.name}-${index}`}
                        >
                            <article className="service-card">
                                <div className="service-card__media">
                                    <img
                                        src={service.img}
                                        srcSet={`${service.imgm} 400w, ${service.img} 1200w`}
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                                        alt={service.alt}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="service-card__body">
                                    <span className="service-card__num">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3>{service.name}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
