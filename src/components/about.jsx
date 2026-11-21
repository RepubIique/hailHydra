import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import facilities from '../assets/about.webp'
import useReveal from '../hooks/useReveal'
import '../styles/about.css'

export default function About({ data }) {
    const revealRef = useReveal()
    const highlights = data
        ? [...(data.Why || []), ...(data.Why2 || [])]
        : []

    return (
        <section id="about" className="section" ref={revealRef}>
            <Container>
                <div className="about-grid">
                    <div className="about-media" data-reveal>
                        <img
                            src={facilities}
                            alt="Hydra Power Engineering facilities"
                            loading="lazy"
                        />
                    </div>

                    <div className="about-copy">
                        <p className="eyebrow" data-reveal>
                            <span className="eyebrow__num">02</span>
                            About us
                        </p>
                        <h2 data-reveal>Three decades in Miri</h2>
                        <p className="about-intro" data-reveal>
                            {data ? data.paragraph : null}
                        </p>

                        <h3 className="about-subhead" data-reveal>
                            Why choose us
                        </h3>
                        <ul className="about-list">
                            {highlights.map((point, index) => (
                                <li
                                    key={`${point}-${index}`}
                                    data-reveal
                                >
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        size="sm"
                                    />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
