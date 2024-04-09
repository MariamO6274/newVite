import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'
import Featured from '../components/LandingPage/Slider/Featured'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Hero />
      <Featured/>
    </>
  );
}

export default Home