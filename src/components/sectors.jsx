import React from 'react'
import Container from 'react-bootstrap/Container'
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

export const Sectors = () => (
    <section className="section section--paper section--tight">
        <Container>
            <div className="sectors-band">
                <p className="sectors-band__label">Sectors we serve</p>
                <ul className="sectors-list">
                    {SECTORS.map((sector) => (
                        <li key={sector}>{sector}</li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
)
