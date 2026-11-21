import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import bg from '../assets/background.png'
import '../styles/header.css'

const ESTABLISHED = 1994

export const Header = ({ data, counts = {} }) => {
    // Derived rather than hard-coded, so the figure never goes stale.
    const years = new Date().getFullYear() - ESTABLISHED

    const stats = [
        { value: ESTABLISHED, label: 'Established in Miri' },
        { value: years, label: 'Years in operation' },
        { value: counts.services, label: 'Core services' },
    ].filter((stat) => stat.value)

    return (
        <section id="header" className="hero">
            <Container>
                <div className="hero__grid">
                    <div className="hero__copy">
                        <p className="eyebrow">
                            Engineering · Design · Fabrication
                        </p>
                        <h1>{data ? data.title : 'Hydra Power Engineering'}</h1>
                        <p className="hero__lede">
                            {data ? data.paragraph : ''}
                        </p>

                        <div className="hero__actions">
                            <a className="btn btn-brand btn-lg" href="#contact">
                                Request a quote
                            </a>
                            <a className="btn btn-ghost btn-lg" href="#services">
                                See our capabilities
                            </a>
                        </div>

                        <dl className="hero__proof">
                            {stats.map((stat) => (
                                <div
                                    className="hero__proof-item"
                                    key={stat.label}
                                >
                                    <dt>{stat.value}</dt>
                                    <dd>{stat.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="hero__media">
                        <img
                            src={bg}
                            alt="Industrial plant operating at dusk"
                        />
                        <div className="hero__badge">
                            <span className="hero__badge-icon">
                                <FontAwesomeIcon icon={faCogs} />
                            </span>
                            <span className="hero__badge-text">
                                <strong>Hydraulic cylinders</strong>
                                <span>Gears · Machining · Steel fabrication</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
