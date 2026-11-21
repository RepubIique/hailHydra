import React from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import '../styles/portfolio.css'

// Two large tiles carry the machining work, then a row of three fabrications.
const FEATURE_TILES = 2

export default function Portfolio({ data }) {
    const revealRef = useReveal()
    const items = data || []

    return (
        <section id="portfolio" className="section section--paper" ref={revealRef}>
            <Container>
                <div className="section-head section-head--split">
                    <p className="eyebrow">
                        <span className="eyebrow__num">03</span>
                        Recent work
                    </p>
                    <h2>Parts and fabrications we&rsquo;ve delivered</h2>
                    <p className="section-head__lede">
                        Gear cutting and machining, alongside custom trailers
                        fabricated for waste-collection vehicles.
                    </p>
                </div>

                <div className="portfolio-bento">
                    {items.map((item, index) => (
                        <figure
                            className={`portfolio-tile ${
                                index < FEATURE_TILES
                                    ? 'portfolio-tile--feature'
                                    : 'portfolio-tile--small'
                            }`}
                            data-reveal
                            key={`${item.title}-${index}`}
                        >
                            <img
                                src={item.image}
                                srcSet={`${item.imgm} 400w, ${item.image} 1200w`}
                                sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 50vw"
                                alt={item.alt}
                                loading="lazy"
                            />
                            <figcaption className="portfolio-tile__caption">
                                <h3>{item.title}</h3>
                                <p>{item.alt}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    )
}
