import React from 'react'

import marketing from "../../Assets/icons/marketing.svg"
import coin from "../../Assets/icons/coin.svg"
import support from "../../Assets/icons/support.svg"
import staff from "../../Assets/icons/staff.svg"
import operation from "../../Assets/icons/operations.svg"
import money from "../../Assets/icons/money.svg"
import shield from "../../Assets/img/shield.png"


const Section4 = () => {
  return (

    <div className='bg-blue-100'>

      <p className='text-center font-bold font-sans text-3xl lg:text-4xl pt-20 px-4'>Your Business, One Platform, DMA</p>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 px-10 lg:px-32 '>
        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4 '>
            <img src={marketing} alt="" />
            <p className='font-bold text-2xl'>Marketing Module</p>


          </div>
          <p className='font-ship'>Marketing automation software to help you drive revenue with high-quality leads,
            save time and resources, and measure and optimize your marketing investments.
          </p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Lead generation</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Lead tracking</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Analytics</li>
          </ul>

        </div>

        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4'>
            <img src={coin} alt="" />
            <p className='font-bold font-sans text-2xl'>Sales Module</p>


          </div>
          <p className='font-ship'>Powerful sales software to help teams close more deals, deepen relationships, and manage their pipeline more effectively</p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Quote generation</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Sales tracking</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" /> Vendor Management</li>
             
          </ul>

        </div>

        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4'>
            <img src={support} alt="" />
            <p className='font-bold font-sans text-2xl'>Customer Module</p>


          </div>
          <p className='font-ship'>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.</p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Customer database</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Customer managemen</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Customer feedback</li>
          </ul>

        </div>

        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4'>
            <img src={staff} alt="" />
            <p className='font-bold font-sans text-2xl'>Staff Module</p>


          </div>
          <p className='font-ship'>Ease of managing and tracking staff efficiency. Also aid the HR team to handle staff strength, appraisals, and leave approvals for all staff without paperwork.</p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Attendance tracking</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Leave management</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Performance tracking</li>
          </ul>

        </div>

        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4'>
            <img src={operation} alt="" />
            <p className='font-bold font-sans text-2xl'>Operations Module</p>


          </div>
          <p className='font-ship'>Ease of storing, accessing, managing and tracking all inventory and procurement activities.</p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Inventory management</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Procurement tracking</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Analytics</li>
          </ul>

        </div>

        <div className='border-dotted border-2 border-gray-300 p-4 rounded-xl'>
          <div className='flex gap-4 justify-center items-center mb-4'>
            <img src={money} alt="" />
            <p className='font-bold font-sans text-2xl'>Finance Module</p>


          </div>
          <p className='font-ship'>Ease of accessing, managing and tracking of all finance activity of the business. A centralized system for generating and sending invoices to customers.</p>

          <hr className='h-[1%] bg-gray-300 shadow-xl my-4' />

          <p className='font-bold font-sans text-2xl'>Features</p>
          <ul className='font-ship'>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Quote generation</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Revenue tracking</li>
            <li className='flex gap-2 items-center py-4'><img src={shield} alt="" />Analytics</li>
          </ul>

        </div>
      </div>

    </div>






  )
}

export default Section4