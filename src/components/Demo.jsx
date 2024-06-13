import React from 'react'

import Header from './homePage/HomeHeader'

import Pricing from './homePage/Pricing'

import Footer from "../components/homePage/Footer"

const Demo = ()=> {
  return (

    <div>

        <Header />

        
            <h1 className='mt-16 lg:mt-4 font-bold pt-10 px-2 text-3xl lg:text-5xl flex justify-center text-orange-500'>Here's your demo video.</h1>
            <p className='text-center p-10'>Get started with all the essential tools you need for your marketing, sales, customer service, staff management, and operations at a discounted rate.</p>

            <div className='flex justify-center pb-10'>

             <button className="shadow-lg rounded-xl font-bold py-3 px-6 text-white bg-[#F66C4E] hover:bg-white hover:text-[#F66C4E] transition ease-out duration-300">Watch Now</button>


            </div>


        

        <Pricing />

        <Footer/>

    </div>


    
  )
}

export default Demo