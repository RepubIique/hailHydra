import React from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import '../styles/team.css'

export const Member = ({ data }) => {
    const revealRef = useReveal()

    return (
        <section
            id="team"
            className="section section--paper"
            ref={revealRef}
        >
            <Container>
                <div className="section-head section-head--split">
                    <p className="eyebrow">
                        <span className="eyebrow__num">05</span>
                        Our team
                    </p>
                    <h2>The people behind the work</h2>
                    <p className="section-head__lede">
                        Decades of combined experience across production,
                        procurement and finance.
                    </p>
                </div>

                <div className="team-grid">
                    {data
                        ? data.map((person, index) => (
                              <article
                                  className="team-card"
                                  key={`${person.name}-${index}`}
                                  data-reveal
                              >
                                  <div className="team-card__media">
                                      <img
                                          src={person.img}
                                          srcSet={`${person.imgm} 400w, ${person.img} 1200w`}
                                          sizes="(max-width: 575px) 50vw, 240px"
                                          alt={person.alt}
                                          loading="lazy"
                                      />
                                  </div>
                                  <h3>{person.name}</h3>
                                  <p>{person.job}</p>
                              </article>
                          ))
                        : null}
                </div>
            </Container>
        </section>
    )
}

export default Member
