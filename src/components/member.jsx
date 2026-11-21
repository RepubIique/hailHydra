import React from 'react'
import Container from 'react-bootstrap/Container'
import '../styles/team.css'

export const Member = ({ data }) => (
    <section id="team" className="section section--paper">
        <Container>
            <div className="section-head section-head--center">
                <p className="eyebrow">Our team</p>
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
                          >
                              <div className="team-card__media">
                                  <img
                                      src={person.img}
                                      srcSet={`${person.imgm} 400w, ${person.img} 1200w`}
                                      sizes="(max-width: 575px) 50vw, 220px"
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

export default Member
