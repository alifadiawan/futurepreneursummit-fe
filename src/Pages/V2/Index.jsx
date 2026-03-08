import React from 'react'
import Navbar from '../../Components/V2/Navbar'

import { Hero } from '../../Sections/V2/Hero'
import SliderLogo from '../../Sections/V2/SliderLogo'
import AboutUs from '../../Sections/V2/AboutUs'
import RangkaianAcara from '../../Sections/V2/RangkaianAcara'
import GrandSummit from '../../Sections/V2/GrandSummit'
import OurEvents from '../../Sections/V2/OurEvents'
import Portfolio from '../../Sections/V2/Portfolio'
import Sponsors from '../../Sections/V2/Sponsors'
import Partners from '../../Sections/V2/Partners'
import Futurecompetition from '../../Sections/V2/Futurecompetition'
import Footer from '../../Sections/V2/Footer'

const Index = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SliderLogo />
        <AboutUs />
        <RangkaianAcara />
        <GrandSummit />
        <OurEvents />
        <Futurecompetition />
        <Portfolio />
        <Partners />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Index