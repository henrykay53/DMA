import React from 'react'
import secondSecImg from "../../Assets/img/section2.png"
import UpArrow from "../../Assets/icons/upArrow.png"
import DownArrow from "../../Assets/icons/downArrow.png"

const secondSection = () => {
    return (
        <div className='bg-[#0000000D]   '>

            <div className='px-4 lg:grid grid-cols-2 content-center items-center gap-24 lg:w-[80%] mx-auto'>

                <div className='flex justify-center'>

                    <div>
                     <img className='pt-10' src={UpArrow} alt="" />


                    </div>

                    
                    <img className='pt-10'  src={secondSecImg} alt="" />

                    

                </div>

                <div className='py-10'>

                    <div className='lg:pt-20'>
                        

                        <p className='font-bold font-sans text-3xl lg:text-4xl text-center mb-4 xl:w-[80%]'>Perfect Solution For Your Company.</p>
                        {/* <p className='font-bold font-sans text-3xl lg:text-4xl  mb-10'>  </p> */}
                        {/* <p className='font-bold text-4xl mt-4 mb-10'></p> */}

                        <p className=' leading-8 font-ship'>
                            DMA platform is made up of six  products - marketing, sales, customer service, staff management, operations, and finance.
                            Each product in the platform is connected to the same CRM database,
                            which provides you with incredible insight into every contact at each stage in their customer journey.
                            Although our products are unique and powerful on their own but the real experience happens when you use them together
                        </p>

                        <p className='mt-4 leading-8 font-ship'>
                            Get a demo to learn about our premium platform features,
                            or get started with our full suite of free tools and upgrade as you grow.
                        </p>

                    </div>

                  

                    <div className='flex justify-end'>
                     <img src={DownArrow} alt="" />
                    </div>



                </div>

               

            </div>

        </div>
    )
}

export default secondSection