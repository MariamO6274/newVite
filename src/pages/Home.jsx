import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/LandingPage/HeroSection/Hero'
import HeroImg from '../components/LandingPage/HeroSection/HeroImg'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Hero />
    </>
  );
}

export default Home