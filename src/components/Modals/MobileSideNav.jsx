import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import Overview from '../../Assets/icons/overview.png'
import Admin from '../../Assets/icons/admin.png'
import Vendor from '../../Assets/icons/vendors.png'
import Customer from '../../Assets/icons/customer.png'
import Sales from '../../Assets/icons/sales.png'
import Operation from '../../Assets/icons/operation.png'
import Finance from '../../Assets/icons/finance.png'
import Staff from '../../Assets/icons/staffMan.png'
// import './Style.css'




const MobileSideNav = () => {
    const [adminDropdown, setAdminDropdown] = useState(false);
    const [vendorDropdown, setVendorDropdown] = useState(false);
    const [customerDropdown, setCustomerDropdown] = useState(false);
    const [salesDropdown, setSalesDropdown] = useState(false);
    const [operationDropdown, setOperationDropdown] = useState(false);
    const [financeDropdown, setFinanceDropdown] = useState(false);
    const [staffDropdown, setStaffDropdown] = useState(false);




    const navigate = useNavigate();



    const Logout = () => {

        localStorage.clear();

        // Navigate to the login page
        navigate('/login');
        console.log("I'm logging out");
    };

    return (
        <div>

            <nav className="absolute flex flex-col gap-10 lg:hidden bg-gradient-to-b from-skyBlue via-oceanBlue to-deepBlue  z-10 h-[100%] w-[60%] p-10 shadow-r-lg   font-bold">

                {/* <div className="text-white font-bold text-2xl">
                    <Link to="/dashboard" className='flex items-center gap-2'>

                        <div><img src={Overview} alt="" /></div>
                        <p>OVERVIEW</p>

                    </Link>
                </div> */}

                <ul className="flex flex-col gap-10">

                    <div className="navigation">

                        <div onClick={() => setAdminDropdown(!adminDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Admin} alt="" />
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


                    <div className="navigation">

                        <div onClick={() => setVendorDropdown(!vendorDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Vendor} alt="" />
                            </div>
                            <div className="text-white  ">VENDORS</div>

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


                    <div className="navigation">

                        <div onClick={() => setCustomerDropdown(!customerDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Customer} alt="" />
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

                    <div className="navigation">

                        <div onClick={() => setSalesDropdown(!salesDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Sales} alt="" />

                            </div>
                            <div className="text-white ">SALES</div>

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


                    <div className="navigation">

                        <div onClick={() => setOperationDropdown(!operationDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Operation} alt="" />


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

                    <div className="navigation">

                        <div onClick={() => setFinanceDropdown(!financeDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Finance} alt="" />


                            </div>
                            <div className="text-white  ">FINANCE</div>

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

                    <div className="navigation">

                        <div onClick={() => setStaffDropdown(!staffDropdown)} className="flex gap-4 items-align">
                            <div>
                                <img src={Staff} alt="" />


                            </div>
                            <div className="text-white  ">STAFF MANAGEMENT</div>

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





                    <div>
                        <Link to='/archives' className="text-white hover:text-oceanBlue">ARCHIVES</Link>
                    </div>

                </ul>

                <button onClick={Logout} className=" bg-white hover:bg-deepBlue hover:text-white  py-2 rounded-lg shadow-lg" >Sign out</button>
            </nav>
        </div>
    )
}

export default MobileSideNav;

