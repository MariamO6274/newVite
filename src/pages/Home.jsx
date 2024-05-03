import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'
import Featured from '../components/LandingPage/Slider/Featured'
import Stats from '../components/LandingPage/Stats/Stats'
// import WhyUs from '../components/LandingPage/WhyUs/WhyUs'
import OurMission from '../components/LandingPage/Mission.jsx/OurMission'
import Testimonials from '../components/LandingPage/Testimonials/Testimonials'
import styles from "../style";
import CTA from '../components/LandingPage/CTA/CTA'
import Footer from '../components/Footer'
import Business from '../components/LandingPage/Business/Business'
import FAQ from '../components/LandingPage/FAQ/FAQ'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Hero />
          <Featured />
          {/* <WhyUs /> */}
          <OurMission />
          <Business />
          <Testimonials />
          <FAQ/>
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home