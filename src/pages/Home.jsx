import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'
import Featured from '../components/LandingPage/Slider/Featured'
import Stats from '../components/LandingPage/Stats/Stats'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Stats/>
      <Hero />
      <Featured/>
    </>
  );
}

export default Home