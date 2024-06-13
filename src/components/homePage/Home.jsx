import React from 'react'
import HomeHeader from './HomeHeader'
import Hero from './Hero'
import SectionTwo from './SectionTwo'
import Features from './Features'
import Pricing from './Pricing'
import Contact from './Contact'
import Footer from './Footer'

const Home = ()=> {
  return (


    <div>
      
      <HomeHeader />
      <div id="home">
        <Hero />
      </div>

      <SectionTwo />

      <div id="feature">
        <Features />
      </div>


      <div id="pricing">
        <Pricing />
      </div>


      <div id="contact">
        <Contact />

      </div>

      <Footer />


    </div>

    // <div>
    //     <HomeHeader/>
    //     <Hero />
    //     <SectionTwo />
    //     <Cards/>


    //     <Footer />
    // </div>
  )
}

export default Home