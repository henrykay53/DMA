import React from 'react'
import Arrow from '../../../Assets/icons/orangeArrow.png'

const Leads = ({ week, leads, pending, deals }) => {
    return (
        <div>



            <div className='rounded-lg bg-white  mt-10 mb-10 text-center'>

                <div className='flex justify-end mb-12'>
                    <div className='flex gap-2 py-2 justify-center items-center w-[30%]'>

                        <p className='font-bold'>{week}</p>
                        <div>
                            <img src={Arrow} alt="Down arrow" />
                        </div>

                    </div>
                </div>



                <div className='flex gap-20 justify-center items-center '>
                    <div className='mb-20'>
                        <p className=' font-bold'>All Leads</p>
                        <p className='font-bold text-2xl'>{leads}</p>
                    </div>

                    <div className='mb-20'>
                        <p className='font-bold'>Pending Leads</p>
                        <p className='font-bold text-2xl'>{pending}</p>
                    </div>

                    <div className='mb-20'>
                        <p className='font-bold'>Deals</p>
                        <p className='font-bold text-2xl'>{deals}</p>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default Leads