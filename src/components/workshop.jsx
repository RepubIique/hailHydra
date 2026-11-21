import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import desktopClip from '../assets/CNC.mp4'
import mobileClip from '../assets/CNC-m.mp4'
import '../styles/workshop.css'

/**
 * Full-bleed dark band carrying the shop's own machining footage.
 *
 * The clip is only requested once the band is close to the viewport, and never
 * at all for visitors who prefer reduced motion — for them the band stays a
 * clean dark statement, which is how it degrades if the video fails too.
 */
export const Workshop = () => {
    const revealRef = useReveal()
    const videoRef = useRef(null)
    const [source, setSource] = useState(null)

    useEffect(() => {
        const section = revealRef.current
        if (!section) return undefined

        const reduceMotion =
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reduceMotion || typeof IntersectionObserver === 'undefined') {
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    setSource(
                        window.innerWidth < 768 ? mobileClip : desktopClip
                    )
                    observer.disconnect()
                })
            },
            { rootMargin: '250px 0px' }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [revealRef])

    useEffect(() => {
        const node = videoRef.current
        if (!node || !source) return undefined

        const markPlaying = () => node.classList.add('is-playing')
        node.addEventListener('playing', markPlaying)

        const attempt = node.play()
        if (attempt && typeof attempt.catch === 'function') {
            attempt.catch(() => {
                /* Autoplay refused — the dark band stands on its own. */
            })
        }

        return () => node.removeEventListener('playing', markPlaying)
    }, [source])

    return (
        <section id="workshop" className="workshop" ref={revealRef}>
            <div className="workshop__media">
                <video
                    ref={videoRef}
                    className="workshop__video"
                    src={source || undefined}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    tabIndex={-1}
                />
                <span className="workshop__scrim" />
            </div>

            <Container>
                <div className="workshop__inner">
                    <p className="eyebrow eyebrow--light" data-reveal>
                        Inside the workshop
                    </p>
                    <h2 data-reveal>
                        Cutting, turning and fabricating in Miri
                    </h2>
                    <p className="workshop__lede" data-reveal>
                        Our own lathes, mills and fabrication bays handle the
                        job end to end — from design and prototyping through to
                        the finished component.
                    </p>
                    <a
                        className="btn btn-outline-light btn-lg"
                        href="#contact"
                        data-reveal
                    >
                        Discuss a job with us
                    </a>
                </div>
            </Container>
        </section>
    )
}
