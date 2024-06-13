import React from 'react'
import check from "../../Assets/icons/cloud.png"

const  Pricing = ()=> {
  return (
    <div className='pb-10 bg-[#F2F5FB]'>
        <p className='text-center text-3xl lg:text-4xl  font-bold  py-14'>Get The Right Plan For Your Business</p>

        <div className='lg:flex justify-center gap-10 px-10 py-10'>
            <div className='ring-1 ring-accent px-10 py-10  lg:hover:-mt-10 lg:hover:mb-10  rounded-lg shadow-xl hover:shadow-2xl xl:w-[25%]  trasition ease-out duration-300 text-center'>
                <p className='font-bold font-sans text-4xl'>Starter</p>
                <p className='text-[#0000FFCC] text-2xl font-bold font-sans my-10'>14 Days Free</p>
                <p className='font-ship'>Basic tools to get you started.100% free. No credit card needed.</p>

                <hr className='shadow-xl mt-8' />

                <ul className='my-10 font-ship'>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Marketing Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Sales Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Customer Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Staff Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Operations Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Free Finance Module</li>
                </ul>

                
                <button className="shadow-lg rounded-lg font-bold py-3 px-6 text-skyBlue hover:bg-accent hover:text-white transition ease-out duration-200">Start free trial</button>





            </div>


          


            <div className='text-center ring-1 ring-accent px-10 py-10  my-10 lg:my-0 xl:w-[25%] lg:hover:-mt-10 lg:hover:mb-10 shadow-xl hover:shadow-2xl  trasition ease-out duration-300   rounded-lg'>
                <p className='pb-4  text-xl font-sans'>Most popular</p>
                <p className='font-bold text-4xl font-sans'>Professional</p>
                <p className='text-[#0000FFCC] text-2xl font-bold my-10'>$50/mo</p>
                <p className='font-ship'>Comprehensive software for automation, tracking and reporting.</p>

                <hr className='shadow-xl mt-8' />
                

                <ul className='my-10 font-ship '>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Marketing Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Sales Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Customer Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Staff Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Operations Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Finance Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />24/7 Online Support</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Unlimited Storage Space</li>
                </ul>

                
                <button className="shadow-lg rounded-lg font-bold py-3 px-6 text-skyBlue hover:bg-accent hover:text-white transition ease-out duration-200">Get Started</button>





            </div>


            <div className=' text-center ring-1 ring-accent px-10 py-10  lg:hover:-mt-10 lg:hover:mb-10 xl:w-[25%]  trasition ease-out duration-300 shadow-xl hover:shadow-2xl rounded-lg'>
                <p className='font-bold text-4xl font-sans'>Enterprise</p>
                <p className='text-[#0000FFCC] font-sans text-2xl font-bold my-10'>Custom</p>
                <p className='font-ship'>Comprehensive software with advanced control and flexibility</p>

                <hr className='shadow-xl mt-8' />

                <ul className='my-10 font-ship'>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />All DMA Module</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />24/7 Online Support</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Custom Branding</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Custom Solution</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Dedicated Onboarding</li>
                    <li className='flex items-center gap-2 my-4'>   <img src={check} alt="" />Unlimited Storage Space</li>


                </ul>

               
                <button className="shadow-lg rounded-lg font-bold py-3 px-6 text-skyBlue hover:bg-accent hover:text-white transition ease-out duration-200">Contact Sales</button>





            </div>
        </div>
    </div>
  )
}

export default Pricing