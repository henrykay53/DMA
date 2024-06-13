import React from 'react'
import DashboardHeader from './DashboardHeader'
import Customers from './modals/AllCustomersModal'
import AssignedCustomersModal from './modals/AssignedCustomerModal'
import UnassignedCustomersModal from './modals/UnassignedCustomerModal'
import Leads from './modals/Leads'
import Header from '../../components/Header'
import MobileNav from '../../components/Modals/MobileNav'
import Sales from './modals/Sales'
import Finance from './modals/Finance'




const Dashboard = () => {




  return (

    <div>
      <MobileNav />
      <div className='bg-gray-100 lg:flex gap-4 items-align '>
        <Header />
        <div>

          <DashboardHeader />
          <div className='lg:grid grid-cols-4 mx-4 gap-4  items-center justify-evenly'>

            <Customers figure='3550' label='All Customres' percentage='35%' />
            <AssignedCustomersModal figure='456' label='Assigned Customres' percentage='10%' />
            <UnassignedCustomersModal figure='1098' label='Unassigned Customres' percentage='8%' />
            <Leads week='This week' leads='800k' pending='40k' deals='20k' />


          </div>

          <div className='grid grid-cols-2 pl-5'>
            <div>
              <Sales />
            </div>
            <Finance />
            <AssignedCustomersModal figure='456' label='Assigned Customres' percentage='10%' />

          </div>

        </div>
      </div>
    </div>



  )
}

export default Dashboard