import React, {useState} from "react";

// For nvigating to a differnt page
import { Link } from "react-router-dom";

// For navigating to sections on the same page
import { HashLink  } from "react-router-hash-link"; 

import Logo from "../../Assets/icons/Logo.jpg"
// import "../components/Style.css";



import { HambergerMenu } from "iconsax-react";

// import SideNav from "../SideNav";



const Header = ({home, contact, features, pricing}) => {

  const [sideNavigation, setSideNavigtion] = useState("hidden")



  const handleSetNav = (e)=>{

    if(sideNavigation === "hidden"){
        setSideNavigtion(" ");
    }
    if(sideNavigation === " "){
        setSideNavigtion("hidden");
    }
    
  }

  return (

    
    <div>


        {/* Mobile navbar */}
        <nav  className="flex justify-between py-2 px-4 items-center fixed top-0 z-10 shadow-lg w-[100%] bg-white xl:hidden">

            <Link to="/">

                <div>
                    <img src={Logo} alt="" />
                
                </div>

            </Link>

         
           
            <div>
             <HambergerMenu size="32" color="#555555" onClick={handleSetNav}/>

             {/* {sideNavigation !== "hidden" ?? <SideNav />  } */}

            </div>
        
        </nav>


        {/* Navbar for desktop */}
      <nav className="xl:flex justify-around items-center hidden p-4 font-sans shadow-lg">
        {/* <h1 className="text-white font-bold">
                <Link to="/dashboard" >ANALYTIC DASHBOARD</Link>
         </h1> */}

             <div className="ml-20" >
                <Link to="/">
                    <img src={Logo} alt="" />

                </Link>
               
            </div>
        
            <ul className="flex gap-20 ml-40 justify-end">

                <HashLink smooth to="#home">

                    <li className=" hover:text-accent font-bold">Home</li>

                    
                </HashLink>



                <HashLink smooth to="#feature">

                    <li className=" hover:text-accent font-bold">Features</li>

                    
                </HashLink>

                <HashLink smooth to="#pricing">

                    <li className=" hover:text-accent font-bold">Pricing</li>

                    
                </HashLink>

                <HashLink smooth to="#contact">

                    <li className=" hover:text-accent font-bold">Contact</li>

                    
                </HashLink>
                {/* <li className=" hover:text-[#F66C4E] font-bold">Features</li> */}
                {/* <li className="hover:text-[#F66C4E] font-bold">Pricing</li> */}
                {/* <li className="hover:text-[#F66C4E] font-bold">Contact Sales</li> */}
               
            </ul>

            <div className="flex gap-10 items-center">

                <Link to="/demoform">
                    <button className="bg-accent shadow-lg rounded-lg py-3 px-6 font-bold text-white hover:bg-white hover:text-skyBlue transition ease-out duration-300">Get a demo</button>
                </Link>

                <Link to="/login">
                    <button className="shadow-lg rounded-xl font-bold py-3 px-6 text-skyBlue hover:bg-accent hover:text-white transition ease-out duration-300">Login</button>
                </Link>

                
            </div>

    

      </nav>

    </div>
  );
};

export default Header;
