import React from 'react'
import Container from 'react-bootstrap/Container'
import '../styles/client.css'

// The data stores the attribution as "Name, Sector" in one field.
const splitAttribution = (value) => {
    const [name, sector] = (value || '').split(',')
    return { name: (name || '').trim(), sector: (sector || '').trim() }
}

export const Clients = ({ data }) => (
    <section id="testimonials" className="section">
        <Container>
            <div className="section-head section-head--center">
                <p className="eyebrow">Client feedback</p>
                <h2>What our clients say</h2>
                <p className="section-head__lede">
                    References from across construction, offshore, agriculture
                    and steel fabrication.
                </p>
            </div>

            <div className="testimonial-grid">
                {data
                    ? data.map((entry, index) => {
                          const { name, sector } = splitAttribution(
                              entry.name
                          )
                          return (
                              <figure
                                  className="testimonial-card"
                                  key={`${entry.name}-${index}`}
                              >
                                  <span
                                      className="testimonial-card__mark"
                                      aria-hidden="true"
                                  >
                                      &ldquo;
                                  </span>
                                  <blockquote>{entry.text}</blockquote>
                                  <figcaption className="testimonial-card__author">
                                      <img
                                          src={entry.img}
                                          srcSet={`${entry.imgm} 400w, ${entry.img} 1200w`}
                                          sizes="44px"
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
                      })
                    : null}
            </div>
        </Container>
    </section>
)

export default Clients
