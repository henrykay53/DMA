import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { HambergerMenu } from "iconsax-react";
import MobileSideNav from './MobileSideNav';
import Logo from '../../Assets/icons/Logo.jpg'


function MobileNav() {


    const [open, setOpen] = useState(false);
  
    return (

        <div>
            <div className='flex items-center justify-between lg:hidden bg-gradient-to-r from-skyBlue via-deepBlue to-oceanBlue py-3 px-2'>
                <div className='mb-2'>
                    <Link to="/dashboard"><img src={Logo} alt="" /></Link>
                </div>
                <div  onClick={() => setOpen(!open)}>
                    <HambergerMenu size="32" color="#555555" />
                </div>
            </div>

            <div>
                {open ? <MobileSideNav /> : null}
            </div>

          

        </div>

    )
}

export default MobileNav