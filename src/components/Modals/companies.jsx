import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../../Assets/icons/company.png'

const companies = () => {
    return (
        <>

            <div className='font-bold text-3xl lg:text-6xl text-accent text-center py-5 lg:py-10'>CHOOSE A COMPANY</div>

            <div className='grid  lg:grid-cols-3 gap-10 items-center justify-center lg:mt-10 mb-10 px-2 text-center  lg:w-[60%] lg:mx-auto  '>
                <Link to="/dashboard" className='p-20 lg:p-10 bg-red-500 shadow-lg hover:shadow-xl rounded-lg '>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-green-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-yellow-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-gray-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-orange-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-purple-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-green-200 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-brown-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>
                <Link to="/dashboard" className='p-10 bg-blue-500 shadow-lg hover:shadow-xl rounded-lg'>
                    <div className='flex justify-center'><img src={Company} alt="" /></div>
                </Link>

               

            </div >

        </>
    )
}

export default companies