import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Sectors } from './components/sectors'
import { Workshop } from './components/workshop'
import { Clients } from './components/clients'
import { Member } from './components/member'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import { ProductList } from './components/productList'
import Footer from './components/footer'
import { MobileCta } from './components/mobileCta'

// Below-the-fold sections are code-split so the hero paints first
const About = React.lazy(() => import('./components/about'))
const Services = React.lazy(() => import('./components/services'))
const Portfolio = React.lazy(() => import('./components/portfolio'))

export const AppShell = () => {
    const [landingPageData, setLandingPageData] = useState({})

    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    const counts = {
        services: landingPageData.Services?.length,
        team: landingPageData.Team?.length,
    }

    return (
        <>
            <Navigation contact={landingPageData.Contact} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <main className="main-content">
                            <Header
                                data={landingPageData.Header}
                                counts={counts}
                                location="Miri, Sarawak"
                            />

                            <Suspense fallback={null}>
                                <Services data={landingPageData.Services} />
                            </Suspense>

                            <Sectors />

                            <Workshop />

                            <Suspense fallback={null}>
                                <About data={landingPageData.About} />
                                <Portfolio data={landingPageData.Portfolio} />
                            </Suspense>

                            <Clients data={landingPageData.Clients} />
                            <Member data={landingPageData.Team} />
                            <Contact data={landingPageData.Contact} />
                        </main>
                    }
                />

                <Route
                    path="/products/:productName?/:variantName?/:subVariantName?"
                    element={
                        <main className="main-content">
                            <ProductList data={landingPageData.Product} />
                            <Contact data={landingPageData.Contact} />
                        </main>
                    }
                />
            </Routes>

            <Footer
                services={(landingPageData.Services || []).map(
                    (service) => service.name
                )}
                contact={landingPageData.Contact || {}}
            />

            <MobileCta phone={landingPageData.Contact?.phone} />
        </>
    )
}

// The router sits outside the shell so the shell can be rendered inside any
// router — the tests drive it with a MemoryRouter.
const App = () => (
    <Router>
        <AppShell />
    </Router>
)

export default App
