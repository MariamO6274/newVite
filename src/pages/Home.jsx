import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'
import Featured from '../components/LandingPage/Slider/Featured'
import Stats from '../components/LandingPage/Stats/Stats'
import WhyUs from '../components/LandingPage/WhyUs/WhyUs'
import OurMission from '../components/LandingPage/Mission.jsx/OurMission'
import Testimonials from '../components/LandingPage/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Stats/>
      <Hero />
      <Featured/>
      <WhyUs/>
      <OurMission/>
      <Testimonials/>
    </>
  );
}

export default Home