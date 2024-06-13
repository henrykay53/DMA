import React from 'react'
import { Link } from "react-router-dom";

import HeroIllustration from "../../Assets/img/heroIllustration.png"

const Hero = () => {
    return (
        <div className='mt-10 p-6  '>

            <div className='lg:grid grid-cols-2 mx-auto gap-32 xl:w-[80%] pt-10'>

                <div className='text-left   '>

                    <p className='lg:w-[80%] lg:text-5xl mb-6 leading-10 lg:leading-relaxed text-4xl font-bold font-sans'>The Easiest way to manage your <span  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900 '>Business</span><span className='text-orange-400'>.</span></p>
                    <p className='font-ship'>Data Management software that seamlessly connect your data, teams, and customers on one platform. DMA enables you to grow your business faster by focusing on what matters most: your customers.</p>
                    <p className='mt-6 font-ship'> DMA is all you need to connect  and track your marketing, sales, Inventory, Finance, Customer and Staff Management.</p>

                    <div className="flex gap-10 items-center mt-10 mb-10 lg:mt-20">

                        <Link to="/demoform">

                            <button className="bg-accent shadow-xl rounded-lg py-3 px-6 font-bold text-white  hover:bg-white hover:text-skyBlue transition ease-out duration-300">Get a demo</button>


                        </Link>

                        <Link to="/login">

                            <button className="shadow-xl rounded-lg font-bold py-3 px-6 text-skyBlue hover:bg-accent hover:text-white transition ease-out duration-300">Log in</button>


                        </Link>




                    </div>

                </div>

                <div className='flex justify-center'>
                    <img className='w-[100%] h-[100%]' src={HeroIllustration} alt="Software analysts" />

                </div>

        
            </div>

        </div>
    )
}

export default Hero