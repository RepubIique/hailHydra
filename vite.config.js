import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],

    // CRA exposed env vars prefixed REACT_APP_. Keeping that prefix means the
    // existing .env files and the GitHub Actions repository secrets carry over
    // unchanged. New vars can use the Vite-native VITE_ prefix.
    envPrefix: ['VITE_', 'REACT_APP_'],

    build: {
        // gh-pages publishes ./build, so keep CRA's output directory name.
        outDir: 'build',
        // Assets are served from the domain root (hydrapower.engineering).
        assetsDir: 'static',
    },

    server: {
        port: 3000,
    },

    // `vite preview` is used to show the built site for review over Tailscale;
    // without this the hostname is rejected with a 403.
    preview: {
        allowedHosts: ['macpro.tailf4baee.ts.net', '100.99.28.1'],
    },

    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.js',
        css: false,
    },
})
