import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from './App'

// Rendered inside a MemoryRouter rather than through App: jsdom has no real
// history for BrowserRouter, and routing is what we're exercising here.
//
// The shell's below-the-fold sections are React.lazy, so the very first mount
// suspends and React discards that commit — everything must therefore be
// awaited with the findBy* queries rather than asserted synchronously.
describe('App shell', () => {
    it('renders navigation and footer on the home route', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppShell />
            </MemoryRouter>
        )

        // The nav renders outside the lazy-loaded page sections.
        expect(
            await screen.findByRole('link', { name: /products/i })
        ).toBeInTheDocument()

        // The footer renders on every route.
        expect(
            await screen.findByText(/all rights reserved/i)
        ).toBeInTheDocument()

        // The hero heading is the single top-level heading.
        expect(
            await screen.findByRole('heading', { level: 1 })
        ).toBeInTheDocument()
    })

    it('renders the steel catalogue on the products route', async () => {
        render(
            <MemoryRouter initialEntries={['/products']}>
                <AppShell />
            </MemoryRouter>
        )

        expect(
            await screen.findByRole('heading', {
                level: 1,
                name: /steel we stock/i,
            })
        ).toBeInTheDocument()
    })
})
