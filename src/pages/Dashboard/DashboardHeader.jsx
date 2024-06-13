import React from 'react'
import Search from "../../Assets/icons/search.png"
import Arrow from "../../Assets/icons/orangeArrow.png"
import Bell from "../../Assets/icons/bell.png";
import Avata from "../../Assets/icons/avata.png";



const DashboardHeader = () => {
    return (
        <>

            <div className='flex justify-center items-align  gap-10 px-32 py-8'>
                <div className='hidden lg:flex gap-8 items-center'>

                    <p className='font-bold text-4xl'>DASHBOARD</p>
                    <p className='text-xl'>Welcome back, Bimbo</p>

                </div>


                <div className=' hidden lg:flex items-center'>
                    <img className='absolute pl-2' src={Search} alt="A search icon" />
                    <input className='py-2  pl-8 pr-80 ring-1 focus:ring-2 ring-[#666666]  outline-none' type="text" placeholder='Search' />

                    <img className='pl-2' src={Bell} alt="" />
                </div>

                <div className='flex items-center gap-4'>
                    <p>Salau, Bimbo</p>
                    <img src={Avata} alt="" />
                    <img src={Arrow} alt="" />
                </div>
            </div>

        </>
    )
}

export default DashboardHeader