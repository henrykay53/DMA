import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Admin from '../Assets/icons/admin.png'
import Vendors from '../Assets/icons/vendors.png'
import Customer from '../Assets/icons/customer.png'
import Sales from '../Assets/icons/sales.png'
import Operation from '../Assets/icons/operation.png'
import Finance from '../Assets/icons/finance.png'
import StaffMan from '../Assets/icons/staffMan.png'
// import logo from '../Assets/icons/Logo.jpg'
import Overview from '../Assets/icons/overview.png'
import Settings from '../Assets/icons/settings.png'
import logout from '../Assets/icons/logout.png'
import Archive from '../Assets/icons/archive.png'
import "../components/Style.css";


const Header = () => {

    const [adminDropdown, setAdminDropdown] = useState(false);
    const [vendorDropdown, setVendorDropdown] = useState(false);
    const [customerDropdown, setCustomerDropdown] = useState(false);
    const [salesDropdown, setSalesDropdown] = useState(false);
    const [operationDropdown, setOperationDropdown] = useState(false);
    const [financeDropdown, setFinanceDropdown] = useState(false);
    const [staffDropdown, setStaffDropdown] = useState(false);
    // const [active, setActive] = useState(false);


   




    const navigate = useNavigate();


    const Logout = () => {

        localStorage.clear();
        // Navigate to the login page
        navigate('/login');
        console.log("I'm logging out");
    };


    return (


        <div className="lg:w-[18%]">

            <nav className="hidden lg:flex flex-col gap-10 shadow-r-lg  bg-gradient-to-t from-skyBlue via-oceanBlue to-deepBlue pt-3 px-10 pb-10 font-bold">
                {/* <h1 className="text-white font-bold text-xl">
                </h1> */}

                <ul className="flex flex-col gap-10 pb-14">

                    <div>
                        {/* <img className="w-[50%] " src={logo} alt="Brand logo" /> */}

                    </div>


                    <Link to="/dashboard" className="hover:ring-2 ring-white p-2" >

                        <div className="flex gap-4 items-align">
                            <div>
                                <img src={Overview} alt="Overview logo" />
                            </div>
                            <div className="text-white">OVERVIEW</div>
                        </div>

                    </Link>

                  

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">
                    

                        <div onClick={() => setAdminDropdown(!adminDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Admin} alt="Admin logo" />
                            </div>
                            <div className="text-white">ADMINISTRATION</div>

                        </div>

                        {adminDropdown ? <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                            <li className="hover:text-accent"  >
                                <Link to="/messageboard" className="focus:text-accent">Message Board</Link>
                            </li>
                            <li className="hover:text-accent">
                                <Link to="/officesupply" className="focus:text-accent">Office Supply</Link>
                            </li>
                            <li className="hover:text-accent" >
                                <Link to="/confrenceroom" className="focus:text-accent">Confrence Room</Link>
                            </li>
                        </div>
                            : ''}


                    </div>

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setVendorDropdown(!vendorDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Vendors} alt="Vendor logo" />
                            </div>
                            <div className="text-white ">VENDORS</div>

                        </div>
                        {vendorDropdown ?
                            <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                                <li className="hover:text-accent">
                                    <Link to="/vendors">All Vendors</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/myvendors">My Vendors</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/unassignedvendors">Unassigned Vendors</Link>
                                </li>
                            </div>
                            : ''}
                    </div>


                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setCustomerDropdown(!customerDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Customer} alt="Customer logo" />
                            </div>
                            <div className="text-white">CUSTOMER</div>

                        </div>
                        {customerDropdown ?

                            <div className="nav-content bg-gray-100 absolute top-10 p-4 shadow-lg hidden font-semibold">
                                <li className="hover:text-accent">
                                    <Link to="/allcustomers">All Customers</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/mycustomers">My Customers</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/unassignedcustomers">Uassigned Customers</Link>
                                </li>
                            </div>
                            : ''}
                    </div>

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setSalesDropdown(!salesDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Sales} alt="Sales logo" />

                            </div>
                            <div className="text-white">SALES</div>

                        </div>

                        {salesDropdown ?


                            <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                                <li className="hover:text-accent">
                                    <Link to="/allleads">All Leads</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/pendingleads">Pending Leads</Link>
                                </li>
                                <li className="hover:text-accent" >
                                    <Link to="/deals">Deals</Link>
                                </li>
                            </div>
                            : ''}
                    </div>

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setOperationDropdown(!operationDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Operation} alt="Operations logo" />


                            </div>
                            <div className="text-white">OPERATION</div>

                        </div>

                        {operationDropdown ?
                            <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                                <li className="hover:text-accent">
                                    <Link to="/inventory">Inventory</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/purchaseorder">Purchase Order</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/procurment">Procurement</Link>
                                </li>
                            </div>
                            : ''}
                    </div>

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setFinanceDropdown(!financeDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Finance} alt="Finance logo" />

                            </div>
                            <div className="text-white">FINANCE</div>

                        </div>
                        {financeDropdown ?
                            <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                                <li className="hover:text-[#F64514]">
                                    <Link to="/sales">Sales</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/purchase">Purchase</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/invoice">Invoice</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/pettycash">Petty Cash</Link>
                                </li>
                            </div>
                            : ''}
                    </div>

                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-2">

                        <div onClick={() => setStaffDropdown(!staffDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={StaffMan} alt="Staff Logo" />
                            </div>
                            <div className="text-white">STAFF MANAGEMENT</div>

                        </div>
                        {staffDropdown ?
                            <div className="nav-content bg-gray-100 absolute top-10 p-4  shadow-lg hidden font-semibold">
                                <li className="hover:text-accent">
                                    <Link to="/employee">Employee</Link>
                                </li >
                                <li className="hover:text-accent">
                                    <Link to="/attendance">Attendance</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/leave">Leave</Link>
                                </li>
                                <li className="hover:text-accent">
                                    <Link to="/performance">Performance</Link>
                                </li>
                            </div>
                            : ''}
                    </div>



                    <div className="navigation cursor-pointer hover:ring-2 ring-white p-1 ">
                        <div className="flex items-align gap-3">
                            <img src={Archive} alt="Archive logo" />
                            <Link className='text-white mt-2' to='/archives'>ARCHIVES</Link>

                        </div>


                    </div>

                </ul>

                <div className="flex items-center ml-10">
                    <div>
                        <img src={Settings} alt="" />
                    </div>
                    {/* <button onClick={Logout} className="ml-10 bg-white hover:bg-[#F64514] hover:text-white px-10 py-2 rounded-lg shadow-lg" >Sign out</button> */}

                </div>

                <div className="flex items-center  px-10 py-2">

                    <button onClick={Logout} className=" text-white" >
                        <div>
                            <img src={logout} alt="" />
                        </div>
                    </button>

                </div>

            </nav>
        </div>
    );
};

export default Header;
