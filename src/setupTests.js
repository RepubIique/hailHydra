// Extends Vitest's `expect` with jest-dom matchers (toBeInTheDocument, etc).
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom does not implement matchMedia, which react-bootstrap touches when it
// sets up responsive behaviour. Stub it so component tests can render.
if (!window.matchMedia) {
    window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })
}

// jsdom has no scrollIntoView; the navbar calls it when a section link is used.
if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn()
}
