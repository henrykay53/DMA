import React from 'react'
import Profile from '../../../Assets/icons/profile.png'

const AssignedCustomersModal = ({ figure, label, percentage }) => {
    return (
        <div className='rounded-lg bg-white p-10  text-center'>

            <img className='mx-auto pb-2' src={Profile} alt="" />
            <p className='font-bold text-4xl pb-2'>{figure}</p>
            <p className='text-xl text-gray-400 pb-2'>{label}</p>

            <div className='flex items-center justify-center gap-2'>
                <p className='font-bold text-lg'>{percentage}</p>
                <p className='text-gray-900'>increase in the last month</p>
            </div>
        </div>
    )
}

export default AssignedCustomersModal