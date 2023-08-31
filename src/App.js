import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Clients } from './components/clients'
import { Member } from './components/member'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductList } from './components/productList'
import Footer from './components/footer'

const About = React.lazy(() => import('./components/about'))
const Services = React.lazy(() => import('./components/services'))
const Portfolio = React.lazy(() => import('./components/portfolio'))

const App = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="main-content">
                            <Header data={landingPageData.Header} />
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Services data={landingPageData.Services} />
                                <About data={landingPageData.About} />
                                <Portfolio data={landingPageData.Portfolio} />
                            </React.Suspense>
                            <Clients data={landingPageData.Clients} />
                            <Member data={landingPageData.Team} />
                            <Contact data={landingPageData.Contact} />
                        </div>
                    }
                />
                <Route
                    path="/products/:productName?/:variantName?/:subVariantName?"
                    element={<ProductList data={landingPageData.Product} />}
                />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
