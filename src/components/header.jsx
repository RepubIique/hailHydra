import React from 'react'
import Container from 'react-bootstrap/Container'
import bg from '../assets/background.png'
import '../styles/header.css'

const ESTABLISHED = 1994

export const Header = ({ data, counts = {}, location }) => {
    // Derived rather than hard-coded, so the figure never goes stale.
    const years = new Date().getFullYear() - ESTABLISHED

    const stats = [
        { value: ESTABLISHED, label: 'Established' },
        { value: years, label: 'Years in operation' },
        counts.services
            ? { value: counts.services, label: 'Core services' }
            : null,
        location ? { value: location, label: 'Where we are' } : null,
    ].filter(Boolean)

    return (
        <section id="header" className="hero">
            <div className="hero__bg" aria-hidden="true">
                <img src={bg} alt="" />
                <span className="hero__scrim" />
            </div>

            <Container>
                <div className="hero__inner">
                    <p className="eyebrow eyebrow--light">
                        Engineering · Design · Fabrication
                    </p>
                    <h1 className="hero__title">
                        {data ? data.title : 'Hydra Power Engineering'}
                    </h1>
                    <p className="hero__lede">{data ? data.paragraph : ''}</p>

                    <div className="hero__actions">
                        <a className="btn btn-brand btn-lg" href="#contact">
                            Request a quote
                        </a>
                        <a
                            className="btn btn-outline-light btn-lg"
                            href="#workshop"
                        >
                            Inside the workshop
                        </a>
                    </div>
                </div>
            </Container>

            <div className="hero__stats">
                <Container>
                    <dl className="hero__stats-inner">
                        {stats.map((stat) => (
                            <div className="hero__stat" key={stat.label}>
                                <dt>{stat.value}</dt>
                                <dd>{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </Container>
            </div>
        </section>
    )
}
