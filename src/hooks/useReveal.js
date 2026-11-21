import { useEffect, useRef } from 'react'

/**
 * Reveals children marked with `data-reveal` as they scroll into view.
 *
 * The hidden state is scoped to a `.js-reveal` class on <html>, added here, so
 * that content stays visible when JavaScript is unavailable or fails.
 * Honours prefers-reduced-motion by revealing everything immediately.
 *
 * A MutationObserver picks up reveal targets that appear after mount — several
 * sections render nothing until their data arrives, and without this their
 * content would stay at opacity 0 forever.
 *
 * @returns {import('react').RefObject<HTMLElement>} attach to the section
 */
export default function useReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const root = ref.current
        if (!root) return undefined

        const nodesOf = () => Array.from(root.querySelectorAll('[data-reveal]'))

        const reduceMotion =
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (reduceMotion || typeof IntersectionObserver === 'undefined') {
            nodesOf().forEach((node) => node.classList.add('is-revealed'))
            return undefined
        }

        document.documentElement.classList.add('js-reveal')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    entry.target.classList.add('is-revealed')
                    observer.unobserve(entry.target)
                })
            },
            { threshold: 0.06, rootMargin: '0px 0px -6% 0px' }
        )

        const observePending = () => {
            nodesOf().forEach((node) => {
                if (!node.classList.contains('is-revealed')) {
                    observer.observe(node)
                }
            })
        }

        observePending()

        let mutations
        if (typeof MutationObserver !== 'undefined') {
            mutations = new MutationObserver(observePending)
            mutations.observe(root, { childList: true, subtree: true })
        }

        return () => {
            if (mutations) mutations.disconnect()
            observer.disconnect()
        }
    }, [])

    return ref
}
