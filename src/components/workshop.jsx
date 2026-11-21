import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import useReveal from '../hooks/useReveal'
import desktopClip from '../assets/CNC.mp4'
import mobileClip from '../assets/CNC-m.mp4'
import posterFrame from '../assets/workshop-poster.jpg'
import '../styles/workshop.css'

// Start fetching well before the band is on screen. At a 250px margin the clip
// was still buffering when the section arrived, so the band showed as an empty
// dark block and visitors scrolled past before a single frame appeared.
const PRELOAD_MARGIN = '700px 0px'

/** Smaller encode for anything phone- or tablet-sized. */
const isSmallScreen = () => window.innerWidth < 992

/**
 * Full-bleed dark band carrying the shop's own machining footage.
 *
 * Loops for as long as the band is on screen and starts again whenever the
 * visitor scrolls back to it, so the motion cannot be missed by arriving at the
 * wrong moment. Playback pauses once the band leaves the viewport to avoid
 * burning battery. The poster frame — taken from the clip itself — covers the
 * buffering gap, and the whole video is skipped for visitors who prefer reduced
 * motion, for whom the band stays a clean dark statement.
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

        const play = () => {
            const node = videoRef.current
            if (!node) return
            const attempt = node.play()
            if (attempt && typeof attempt.catch === 'function') {
                attempt.catch(() => {
                    /* Autoplay refused — the poster frame stands on its own. */
                })
            }
        }

        // Deliberately never disconnected: the band has to start playing again
        // every time it comes back into view.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSource(
                            (current) =>
                                current ||
                                (isSmallScreen() ? mobileClip : desktopClip)
                        )
                        play()
                    } else if (videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause()
                    }
                })
            },
            { rootMargin: PRELOAD_MARGIN }
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [revealRef])

    useEffect(() => {
        const node = videoRef.current
        if (!node || !source) return undefined

        const attempt = node.play()
        if (attempt && typeof attempt.catch === 'function') {
            attempt.catch(() => {
                /* Autoplay refused — the poster frame stands on its own. */
            })
        }
    }, [source])

    return (
        <section id="workshop" className="workshop" ref={revealRef}>
            <div className="workshop__media">
                <video
                    ref={videoRef}
                    className="workshop__video"
                    src={source || undefined}
                    poster={source ? posterFrame : undefined}
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
