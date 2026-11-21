import React from 'react'
import Container from 'react-bootstrap/Container'
import '../styles/portfolio.css'

export default function Portfolio({ data }) {
    return (
        <section id="portfolio" className="section section--paper">
            <Container>
                <div className="section-head">
                    <p className="eyebrow">Recent work</p>
                    <h2>Parts and fabrications we&rsquo;ve delivered</h2>
                    <p className="section-head__lede">
                        Gear cutting and machining, alongside custom trailers
                        fabricated for waste-collection vehicles.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {data
                        ? data.map((item, index) => (
                              <figure
                                  className="portfolio-card"
                                  key={`${item.title}-${index}`}
                              >
                                  <div className="portfolio-card__media">
                                      <img
                                          src={item.image}
                                          srcSet={`${item.imgm} 400w, ${item.image} 1200w`}
                                          sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                                          alt={item.alt}
                                          loading="lazy"
                                      />
                                  </div>
                                  <figcaption className="portfolio-card__caption">
                                      <h3>{item.title}</h3>
                                      <p>{item.alt}</p>
                                  </figcaption>
                              </figure>
                          ))
                        : null}
                </div>
            </Container>
        </section>
    )
}
