import React, { useCallback, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faFax,
    faMapMarker,
    faPhone,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import LazyGoogleMaps from './lazyLoadGoogleMaps'
import useReveal from '../hooks/useReveal'
import '../styles/contact.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

const telHref = (value) => `tel:${(value || '').replace(/[^\d+]/g, '')}`

export const Contact = ({ data }) => {
    const revealRef = useReveal()
    const [form, setForm] = useState(EMPTY_FORM)
    const [status, setStatus] = useState('idle')

    const handleChange = useCallback((event) => {
        const { name, value } = event.target
        setForm((previous) => ({ ...previous, [name]: value }))
    }, [])

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault()
            setStatus('sending')

            emailjs
                .send(
                    import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        to_name: 'HydraPower Engineering',
                        from_email: form.email,
                        to_email: 'hydrapowerenginfo@gmail.com',
                        message: form.message,
                    },
                    import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => {
                        setStatus('sent')
                        setForm(EMPTY_FORM)
                    },
                    () => {
                        setStatus('error')
                    }
                )
        },
        [form]
    )

    const details = [
        data?.address && {
            icon: faMapMarker,
            label: 'Address',
            value: data.address,
        },
        data?.phone && {
            icon: faPhone,
            label: 'Phone',
            value: data.phone,
            href: telHref(data.phone),
        },
        data?.fax && { icon: faFax, label: 'Fax', value: data.fax },
        data?.email && {
            icon: faEnvelope,
            label: 'Email',
            value: data.email,
            href: `mailto:${data.email}`,
        },
    ].filter(Boolean)

    return (
        <section id="contact" className="section" ref={revealRef}>
            <Container>
                <div className="section-head section-head--split">
                    <p className="eyebrow">
                        <span className="eyebrow__num">06</span>
                        Get in touch
                    </p>
                    <h2>Request a quote</h2>
                    <p className="section-head__lede">
                        Tell us what you need manufactured, repaired or
                        supplied and we&rsquo;ll come back to you with a
                        quotation.
                    </p>
                </div>

                <div className="contact-grid">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        data-reveal
                    >
                        <div className="contact-form__row">
                            <div className="contact-field">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    id="contact-name"
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    id="contact-email"
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="you@company.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Tell us about the job — part, material, quantity and timeline."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-form__actions">
                            <button
                                type="submit"
                                className="btn btn-brand btn-lg"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending'
                                    ? 'Sending…'
                                    : 'Send enquiry'}
                            </button>

                            {status === 'sending' && (
                                <p className="contact-status contact-status--sending">
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    Sending your enquiry…
                                </p>
                            )}
                            {status === 'sent' && (
                                <p className="contact-status contact-status--sent">
                                    Thank you. We will get back to you as soon
                                    as possible.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="contact-status contact-status--error">
                                    Something went wrong. Please try again, or
                                    call us on{' '}
                                    {data?.phone || 'our main line'}.
                                </p>
                            )}
                        </div>
                    </form>

                    <aside className="contact-details" data-reveal>
                        <h3>Contact details</h3>
                        <ul className="contact-details__list">
                            {details.map((entry) => (
                                <li key={entry.label}>
                                    <span className="contact-details__icon">
                                        <FontAwesomeIcon icon={entry.icon} />
                                    </span>
                                    <span>
                                        <span className="contact-details__label">
                                            {entry.label}
                                        </span>
                                        {entry.href ? (
                                            <a
                                                className="contact-details__value"
                                                href={entry.href}
                                            >
                                                {entry.value}
                                            </a>
                                        ) : (
                                            <span className="contact-details__value">
                                                {entry.value}
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                <div className="contact-map" data-reveal>
                    <LazyGoogleMaps />
                </div>
            </Container>
        </section>
    )
}
