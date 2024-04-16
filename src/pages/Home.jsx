import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'
import Featured from '../components/LandingPage/Slider/Featured'
import Stats from '../components/LandingPage/Stats/Stats'
import WhyUs from '../components/LandingPage/WhyUs/WhyUs'
import OurMission from '../components/LandingPage/Mission.jsx/OurMission'
import Testimonials from '../components/LandingPage/Testimonials/Testimonials'
import Footer from '../components/Footer'
import styles from "../style";

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
          <WhyUs />
          <OurMission />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home