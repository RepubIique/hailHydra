import React from 'react'
import Container from 'react-bootstrap/Container'
import '../styles/services.css'

export default function Services({ data }) {
    return (
        <section id="services" className="section">
            <Container>
                <div className="section-head section-head--center">
                    <p className="eyebrow">Capabilities</p>
                    <h2>From design to delivery</h2>
                    <p className="section-head__lede">
                        Hydraulic cylinders, gear cutting and CNC machining,
                        product design and fabrication, maintenance and repair,
                        warranty support, quality control and material
                        sourcing.
                    </p>
                </div>

                <div className="services-grid">
                    {data
                        ? data.map((service, index) => (
                              <article
                                  className="service-card"
                                  key={`${service.name}-${index}`}
                              >
                                  <div className="service-card__media">
                                      <img
                                          src={service.img}
                                          srcSet={`${service.imgm} 400w, ${service.img} 1200w`}
                                          sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                                          alt={service.alt}
                                          loading="lazy"
                                      />
                                  </div>
                                  <div className="service-card__body">
                                      <h3>{service.name}</h3>
                                      <p>{service.text}</p>
                                  </div>
                              </article>
                          ))
                        : null}
                </div>
            </Container>
        </section>
    )
}
