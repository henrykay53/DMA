import React from 'react'
import { ArchiveTick} from "iconsax-react";

const Success = ()=> {
  return (
    <div className=' bg-blue-200 p-20 w-[60%] ml-auto mr-auto mt-10 rounded-lg shadow-lg'>
        <ArchiveTick size="80" color="#37d67a" className='ml-auto mr-auto mb-2'/>
        <div className='text-center text-4xl text-green-500 font-bold'>Success!!!</div>
        <div className='mt-4 text-center'>You account has been successfully created</div>
    </div>
  )
}

export default Success