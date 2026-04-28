import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutProduct from './components/AboutProduct'
import AboutInnovator from './components/AboutInnovator'
import ProductShowcase from './components/ProductShowcase'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
const LandingPage = () => {
  return (
    <div className='flex flex-col h-auto'  >
        <Navbar/>
        <div className='pt-44 lg:pt-40 '>
        <HeroSection/>
        <AboutProduct/>
        <AboutInnovator/>
        <ProductShowcase/>
        <ContactInfo/>
        <Footer/>
        </div>
        
    </div>
  )
}

export default LandingPage
// style={{background: "linear-gradient(135deg, #0a0a0a, #1c1c1c, #333333, #4d4d4d)"
// }}