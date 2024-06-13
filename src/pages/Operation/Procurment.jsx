import React from 'react'
import Header from '../../components/Header'
import MobileNav from '../../components/Modals/MobileNav'


const Procurement = () => {
  return (

    <div>
      <MobileNav />
      <div className='flex items-align bg-blue-gray-50'>

        <Header />



        <div className='w-[90%] mx-auto lg:mx-4'>
          <div className='text-accent text-5xl flex justify-center align-middle'>Operation - Procurement</div>

        </div>

      </div>
    </div>



  )
}

export default Procurement