import React, { useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const About = (props) => {
    const champRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                champRef.current.classList.add('lazy-load')
            }
        })

        observer.observe(champRef.current)

        return () => observer.disconnect()
    }, [])
    return (
        <div id="about">
            <Row>
                <Col xs={12} lg={6}>
                    <div className="champ" ref={champRef}></div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p>
                            {props.data ? props.data.paragraph : 'loading...'}
                        </p>
                        <h3>Why Choose Us?</h3>
                        <div className="list-style">
                            <Row>
                                <Col lg={6} sm={6} xs={12}>
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                  <li key={`${d}-${i}`}>
                                                      <FontAwesomeIcon
                                                          icon={faCheck}
                                                          style={{
                                                              color: '#5ca9fb',
                                                              fontSize: '11px',
                                                              paddingRight:
                                                                  '8px',
                                                          }}
                                                      />
                                                      {d}
                                                  </li>
                                              ))
                                            : 'loading'}
                                    </ul>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                  <li key={`${d}-${i}`}>
                                                      <FontAwesomeIcon
                                                          icon={faCheck}
                                                          style={{
                                                              color: '#5ca9fb',
                                                              fontSize: '11px',
                                                              paddingRight:
                                                                  '8px',
                                                          }}
                                                      />
                                                      {d}
                                                  </li>
                                              ))
                                            : 'loading'}
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
