import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import facilities from '../assets/about.webp'
import '../styles/about.css'

export default function About({ data }) {
    const highlights = data
        ? [...(data.Why || []), ...(data.Why2 || [])]
        : []

    return (
        <section id="about" className="section">
            <Container>
                <div className="about-grid">
                    <div className="about-media">
                        <img
                            src={facilities}
                            alt="Hydra Power Engineering facilities"
                            loading="lazy"
                        />
                    </div>

                    <div className="about-copy">
                        <p className="eyebrow">About us</p>
                        <h2>Three decades in Miri</h2>
                        <p>{data ? data.paragraph : null}</p>

                        <h3 className="about-subhead">Why choose us</h3>
                        <ul className="about-list">
                            {highlights.map((point, index) => (
                                <li key={`${point}-${index}`}>
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
