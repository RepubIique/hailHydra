import React from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import '../styles/client.css'

// The data stores the attribution as "Name, Sector" in one field.
const splitAttribution = (value) => {
    const [name, sector] = (value || '').split(',')
    return { name: (name || '').trim(), sector: (sector || '').trim() }
}

// The gear-shortage reference: the most concrete story in the set, so it gets
// the pull-quote treatment.
const FEATURED_INDEX = 3

export const Clients = ({ data }) => {
    const revealRef = useReveal()
    const entries = data || []
    const featured = entries[FEATURED_INDEX] || entries[0]
    const rest = entries.filter((entry) => entry !== featured)

    return (
        <section id="testimonials" className="section" ref={revealRef}>
            <Container>
                {featured && (
                    <figure className="testimonial-feature" data-reveal>
                        <p className="eyebrow">
                            <span className="eyebrow__num">04</span>
                            Client feedback
                        </p>
                        <blockquote className="testimonial-feature__quote">
                            {featured.text}
                        </blockquote>
                        <figcaption className="testimonial-feature__author">
                            <img
                                src={featured.img}
                                srcSet={`${featured.imgm} 400w, ${featured.img} 1200w`}
                                sizes="56px"
                                alt={featured.alt}
                                loading="lazy"
                            />
                            <span>
                                <strong>
                                    {splitAttribution(featured.name).name}
                                </strong>
                                <span>
                                    {splitAttribution(featured.name).sector}
                                </span>
                            </span>
                        </figcaption>
                    </figure>
                )}

                <div className="testimonial-grid">
                    {rest.map((entry, index) => {
                        const { name, sector } = splitAttribution(entry.name)
                        return (
                            <figure
                                className="testimonial-card"
                                key={`${entry.name}-${index}`}
                                data-reveal
                            >
                                <blockquote>{entry.text}</blockquote>
                                <figcaption className="testimonial-card__author">
                                    <img
                                        src={entry.img}
                                        srcSet={`${entry.imgm} 400w, ${entry.img} 1200w`}
                                        sizes="40px"
                                        alt={entry.alt}
                                        loading="lazy"
                                    />
                                    <span>
                                        <strong>{name}</strong>
                                        <span>{sector}</span>
                                    </span>
                                </figcaption>
                            </figure>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

export default Clients
