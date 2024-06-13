import React from 'react'
import { Link } from "react-router-dom";
import phone from "../../Assets/icons/telephone.png"
import mail from "../../Assets/icons/email.png"
import screen from "../../Assets/icons/screen.png"
import skater from "../../Assets/img/skater.png"



const SectionFive = () => {
    return (
        <div className='pt-10 px-10 xl:flex justify-center items-center gap-28 '>
            <div className='lg:px-28'>
                <p className='text-3xl lg:text-5xl pb-4 font-bold font-sans text-center lg:text-left xl:w-[70%]   '> <span className='text-[#00F]'>Contact Us</span> About DMA Software</p>
                <p className='xl:w-[70%] leading-8 mt-10 font-ship text-center lg:text-left'>Be excited to contact us today to learn how DMA can support your business. We'll be in touch as soon as possible.</p>

                <div className='xl:grid grid-cols-3 gap-4  '>


                    <div className='shadow-lg  rounded-tl-3xl rounded-br-3xl text-center py-10 my-5  '>
                        <img className='mx-auto' src={phone} alt="A telephone icon" />

                        <p className='font-bold my-8'>Call us directly</p>
                        <button className="shadow-lg rounded-lg font-bold py-3 px-6 bg-accent text-white ">08026865279</button>


                    </div>

                    <div className='shadow-lg   rounded-tl-3xl rounded-br-3xl text-center  py-10 my-5'>
                        <img className='mx-auto' src={mail} alt=" A letter icon" />

                        <p className='font-bold my-5'>Email our Sales Team</p>
                    
                        <button className="shadow-lg rounded-lg font-bold py-3 px-6 bg-accent text-white ">Email Us</button>


                    </div>

                    <div className='shadow-lg   rounded-tl-3xl rounded-br-3xl text-center  py-10 my-5'>
                        <img className='mx-auto' src={screen} alt="A projector icon" />

                        <p className='font-bold my-5'>Get a Product Demo</p>
                        <Link to ="/demoform">
                             <button className="shadow-lg rounded-lg font-bold py-3 px-6 bg-accent text-white ">Get a Demo</button>

                        </Link>


                    </div>

                   

                </div>

            </div>

            <div className='flex justify-center'>

               <img  src={skater} alt="" />


            </div>

        </div>
    )
}

export default SectionFive