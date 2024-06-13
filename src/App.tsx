import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword"
import Signup from "./pages/Authentication/Signup";

import Home from "./components/homePage/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Demo from "./components/Demo";
import DemoForm from "./components/Modals/DemoForm"

import ConfrenceRoom from "./pages/Administration/ConfrenceRoom";
import MessageBoard from "./pages/Administration/MessageBoard";
import OfficeSupply from "./pages/Administration/OfficeSupply";

import Sent from "./pages/Administration/pages/sent"
import Trash from "./pages/Administration/pages/trash"

import Vendors from "./pages/Vendors/AllVendors";
import MyVendors from "./pages/Vendors/MyVendors";
import UnassignedVendors from "./pages/Vendors/UnassignedVendors";

import AllCustomers from "./pages/Customers/AllCustomers";
import MyCustomers from "./pages/Customers/MyCustomers";
import UnassingnedCustomers from "./pages/Customers/UnassignedCustomers";

import Invoice from "./pages/Finance/Invoice";
import PettyCash from "./pages/Finance/PettyCash";
import Purchase from "./pages/Finance/Purchase";
import Sales from "./pages/Finance/Sales";

import Inventory from "./pages/Operation/Inventory";
import Procurment from "./pages/Operation/Procurment";
import PurchaseOrder from "./pages/Operation/PurchaseOrder";

import Employee from "./pages/Staff Management/Employee";
import Attendance from "./pages/Staff Management/Attendance";
import Leave from "./pages/Staff Management/Leave";
import Performance from "./pages/Staff Management/Performance";

import AllLeads from "./pages/Sales/AllLeads";
import PendingLeads from "./pages/Sales/PendingLeads";
import Deals from "./pages/Sales/Deals";

import Success from "./components/Modals/Success";

import PrivateRoutes from "./utils/PrivateRoutes";

import ResetPassword from "./pages/Authentication/ResetPassword"
import Congratulations from "./components/Modals/Congratulations";

import Companies from "./components/Modals/companies";

// For the archive module
import Archive from './pages/Archives/Archives';
import Contracts from './pages/Archives/pages/Contract'
import Letters from './pages/Archives/pages/Letters'
import Reports from './pages/Archives/pages/Reports'
import DrawingsIllustration from './pages/Archives/pages/DrawingIllustration'
import CertificateLicense from './pages/Archives/pages/CertificatesLicense'
import Approvals from './pages/Archives/pages/Approvals'
import Media from './pages/Archives/pages/Media'
import Receipts from './pages/Archives/pages/Receipts'
import PurchaseDoc from './pages/Archives/pages/PurchaseDoc'







const App = () => {
  return (
    <BrowserRouter>
      <Routes>



        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="/congrats" element={<Congratulations />}></Route>


        {/* <Route path="/resetpassword" element={<ResetPassword />}></Route> */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/demoform" element={<DemoForm />}></Route>
        <Route path="/companies" element={<Companies />}></Route>





        <Route path="/success" element={<Success />}></Route>
        <Route path="/signup" element={<Signup />}></Route>



        {/* These routes will be rendered upon successful login by the admin */}
        <Route element={<PrivateRoutes />}>

          <Route element={<Dashboard />} path='/dashboard' />


          {/* Administration module routes */}
          <Route path="/messageboard" element={<MessageBoard />}></Route>
          <Route path="/officesupply" element={<OfficeSupply />}></Route>
          <Route path="/confrenceroom" element={<ConfrenceRoom />}></Route>

          <Route path="/sent" element={<Sent />}></Route>
          <Route path="/trash" element={<Trash />}></Route>





          {/* Customer module routes */}
          <Route path="/allcustomers" element={<AllCustomers />}></Route>
          <Route path="/mycustomers" element={<MyCustomers />}></Route>
          <Route path="/unassignedcustomers" element={<UnassingnedCustomers />}></Route>


          {/* Finance Module routes */}
          <Route path="/invoice" element={<Invoice />}></Route>
          <Route path="/pettycash" element={<PettyCash />}></Route>
          <Route path="/purchase" element={<Purchase />}></Route>
          <Route path="/sales" element={<Sales />}></Route>


          {/* Operations module routes */}
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/procurment" element={<Procurment />}></Route>
          <Route path="/purchaseorder" element={<PurchaseOrder />}></Route>


          {/* Sales module routes */}
          <Route path="/allleads" element={<AllLeads />}></Route>
          <Route path="/pendingleads" element={<PendingLeads />}></Route>
          <Route path="/deals" element={<Deals />}></Route>


          {/* Staff management module routes */}
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/attendance" element={<Attendance />}></Route>
          <Route path="/leave" element={<Leave />}></Route>
          <Route path="/performance" element={<Performance />}></Route>


          {/* Vendor module routes */}
          <Route path="/vendors" element={<Vendors />}></Route>
          <Route path="/myvendors" element={<MyVendors />}></Route>
          <Route path="/unassignedvendors" element={<UnassignedVendors />}></Route>

          {/* Archieve modals */}
          <Route path="/archives" element={<Archive />}></Route>
          <Route path="/contracts" element={<Contracts />}></Route>
          <Route path="/letters" element={<Letters />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/drawings" element={<DrawingsIllustration />}></Route>
          <Route path="/certificate" element={<CertificateLicense />}></Route>
          <Route path="/approvals" element={<Approvals />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/receipts" element={<Receipts />}></Route>
          <Route path="/purchaseDoc" element={<PurchaseDoc />}></Route>

          
         

        

        </Route>
      </Routes>
    </BrowserRouter>


  );
};
export default App;
