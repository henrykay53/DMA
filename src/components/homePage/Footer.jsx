import React from 'react'
import { HashLink } from "react-router-hash-link";

import Email from "../../Assets/icons/whiteMail.png"
import Telephone from "../../Assets/icons/whitePhone.png"

import Twitter from "../../Assets/img/Twitter.png"
import Facebook from "../../Assets/img/facebook.png"
import Instagram from "../../Assets/img/instagram.png"
import Pintrest from "../../Assets/img/pinterest.png"


const Footer = () => {
    return (
        <div className='bg-black text-white pt-10 pb-20 px-10 lg:px-10 laeading-8 '>

            <div className='lg:flex justify-around mb-10'>

                <div className='lg:w-[40%]'>
                    <p className='font-ship'>
                        Growing a business isn’t easy, but we’ve got your back. Explore and learn how DMA software and solutions can help you leave these problems in the past.
                    </p>

                    <div className='flex gap-10 items-center mt-10'>

                        <img src={Email} alt="Email icon" />
                        <a href="mailto:support@dma.com">support@dma.com</a>

                    </div>

                    <div className='flex gap-10 items-center mt-4 mb-10'>

                        <img src={Telephone} alt="Tele phone" />
                        <a href="tel:08077780444">08077780444</a>


                    </div>



                </div>


                <div className=' text-center lg:text-left'>
                    <p className='mb-4 text-gray-400'>COMPANY</p>

                    <ul >
                        <HashLink smooth to="#home">

                            <li className='hover:text-accent'>Home</li>

                        </HashLink>
                        <HashLink smooth to="#feature">

                            <li className='hover:text-accent mb-4 mt-4'>Feature</li>



                        </HashLink>
                        <HashLink smooth to="#pricing">
                            <li className='hover:text-accent mb-4'>Pricing</li>

                        </HashLink>


                        <li className='hover:text-accent mb-4'>Terms and Conditions</li>
                        <li className='hover:text-accent'>Privacy policy</li>
                    </ul>
                </div>

            </div>



            <div className='flex justify-center gap-4 lg:gap-10 mb-10 '>

                <img className='hover:bg-accent rounded-full p-1 transition easa-out duration-200' src={Instagram} alt="" />
                <img className='hover:bg-accent rounded-full p-1 transition easa-out duration-200' src={Facebook} alt="" />
                <img className='hover:bg-accent rounded-full p-1 transition easa-out duration-200' src={Twitter} alt="" />
                <img className='hover:bg-accent rounded-full p-1 transition easa-out duration-200' src={Pintrest} alt="" />
            </div>

            <hr />



            <p class='text-center mt-4 text-gray-500'>
              
            
                <p>Copyright &copy; {new Date().getFullYear()} Powered By: Lytical Technology.</p>
        
            </p>

        </div>
    )
}

export default Footer