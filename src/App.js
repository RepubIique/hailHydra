import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Portfolio } from './components/portfolio'
import { Clients } from './components/clients'
import { Member } from './components/member'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductPage } from './components/productPage'
import Footer from './components/footer'

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
                    className="main-content"
                    element={
                        <>
                            <Header data={landingPageData.Header} />
                            <Services data={landingPageData.Services} />
                            <About data={landingPageData.About} />
                            <Portfolio data={landingPageData.Portfolio} />
                            <Clients data={landingPageData.Clients} />
                            <Member data={landingPageData.Team} />
                            <Contact data={landingPageData.Contact} />
                        </>
                    }
                />
                <Route
                    path="/products/:productName?/:variantName?/:subVariantName?"
                    element={<ProductPage data={landingPageData.Product} />}
                />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
