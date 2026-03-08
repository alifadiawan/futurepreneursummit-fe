import React from 'react'
import Guest from '../../Layout/Guest'


import ImageBackground from '../../Components/V1/ImageBackground'
import LogoSlider from '../../Sections/V1/LogoSlider';
import AboutUsSection from '../../Sections/V1/AboutUsSection';
import RangkaianAcaraSection from '../../Sections/V1/RangkaianAcaraSection';
import GrandSummitSection from '../../Sections/V1/GrandSummitSection';
import OurEvents from '../../Sections/V1/OurEvents';
import FuturecompetitionSection from '../../Sections/V1/FuturecompetitionSection';
import PortfolioSection from '../../Sections/V1/PortfolioSection';
import OrganizationsSection from '../../Sections/V1/OrganizationsSection';
import SponsorsSection from '../../Sections/V1/SponsorsSection';
import HeroSection2 from '../../Sections/V1/HeroSection2';


const LandingPage = () => {
  return (

    <Guest>

      {/* Hero */}
      <ImageBackground />

      {/* Brand Carouse; */}
      <LogoSlider />

      {/* Hero 2 */}
      <HeroSection2 />

      <AboutUsSection />

      <RangkaianAcaraSection />

      <GrandSummitSection />

      <OurEvents />

      <FuturecompetitionSection />

      <PortfolioSection />

      <OrganizationsSection />

      <SponsorsSection />

    </Guest>

  )
}

export default LandingPage