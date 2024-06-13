import React from 'react'
// import Logo from '../components/homePage/icons/Logo.jpg'
import Logo from "../../Assets/icons/Logo.jpg"
import Bell from '../../Assets/icons/bell.png'
import Avatar from '../../Assets/icons/avata.png'
import OrangeArrow from '../../Assets/icons/orangeArrow.png'




function tableHeader() {
  return (
    <div >
        <div className='mt-10 flex items-center justify-between'>
            <img src={Logo} alt="Company's logo" />
            <div className='flex items-center gap-4'>
            
                <img src={Bell} alt="Bell icon" />
                <div className='flex items-center gap-4'>
                <img src={Avatar} alt="Profile picture" />  
                <img src={OrangeArrow} alt="Orange arrow pointing down" />
                </div>
            </div>

        </div>
        <div className='border-b-2 mt-2 border-[#666666]'></div>
       
    </div>
  )
}

export default tableHeader