import React, { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Portfolio } from './components/portfolio'
import { Clients } from './components/clients'
import { Member } from './components/member'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            {/* <Features data={landingPageData.Features} /> */}
            <Services data={landingPageData.Services} />
            <About data={landingPageData.About} />
            <Portfolio data={landingPageData.Portfolio} />
            <Clients data={landingPageData.Clients} />
            <Member data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </div>
    )
}

export default App
