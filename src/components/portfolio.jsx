import { ImageComponent } from './image'
import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import '../styles/portfolio.css'

export default function Portfolio(props) {
    return (
        <div id="portfolio" className="text-center">
            <Container>
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>
                        "Showcasing two decades of superior craftsmanship in
                        hydraulic solutions, spanning diverse sectors and
                        featuring innovative designs, precise manufacturing, and
                        consistent client satisfaction."
                    </p>
                </div>
                <Carousel>
                    {props.data
                        ? props.data.map((d, i) => (
                              <Carousel.Item
                                  interval={1000}
                                  key={`${d.title}-${i}`}
                              >
                                  <ImageComponent
                                      title={d.title}
                                      image={d.image}
                                      imagem={d.imgm}
                                      description={d.description}
                                      alt={d.alt}
                                  />
                              </Carousel.Item>
                          ))
                        : 'Loading...'}
                </Carousel>
            </Container>
        </div>
    )
}
