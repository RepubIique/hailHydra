import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
    it('renders the site shell with navigation and footer', () => {
        render(<App />)

        // The navbar renders outside the lazy-loaded page sections.
        expect(
            screen.getByRole('link', { name: /products/i })
        ).toBeInTheDocument()

        // The footer renders on every route.
        expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    })
})
