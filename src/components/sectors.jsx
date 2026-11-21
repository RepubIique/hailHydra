import React from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import '../styles/sectors.css'

// The sectors named in the company's own client references.
const SECTORS = [
    'Construction',
    'Offshore',
    'Agricultural',
    'Mobile & industrial',
    'Steel fabrication',
    'Hydraulic equipment',
]

export const Sectors = () => {
    const revealRef = useReveal()

    return (
        <section
            className="section section--paper section--tight"
            ref={revealRef}
        >
            <Container>
                <div className="sectors-band">
                    <p className="sectors-band__label" data-reveal>
                        Sectors we serve
                    </p>
                    <ul className="sectors-list">
                        {SECTORS.map((sector) => (
                            <li key={sector} data-reveal>
                                {sector}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
