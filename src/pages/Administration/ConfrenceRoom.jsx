import React from 'react';
import { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';
import BookingForm from "../Administration/modals/bookingForm"
// styles for table
import '../../table.css'
import { flexRender } from '@tanstack/react-table';

const ConfrenceRoom = () => {


  const closeHandler = ()=> {

    setBooking();
  }

  // Sample user for table population
  const staffInfo = [
    {
      id: 1,
      bookingDate: 'Aug 1 2023',
      firstName: 'John',
      lastName: 'Doe',
      requestingStaff: 'Developer',
      admin: 'Front end',

    },


    {
      id: 2,
      bookingDate: 'Jan 5 2024',
      firstName: 'Adam',
      lastName: 'Dennis',
      requestingStaff: 'HR',
      admin: 'HR',

    },

    {
      id: 3,
      bookingDate: 'Jan 5 2024',
      firstName: 'Adam',
      lastName: 'Dennis',
      requestingStaff: 'HR',
      admin: 'HR',

    },


    {
      id: 4,
      bookingDate: 'Jan 5 2024',
      firstName: 'Adam',
      lastName: 'Dennis',
      requestingStaff: 'HR',
      admin: 'HR',

    },

    {
      id: 5,
      bookingDate: 'Jan 5 2024',
      firstName: 'Adam',
      lastName: 'Dennis',
      requestingStaff: 'HR',
      admin: 'HR',

    },

    {
      id: 6,
      bookingDate: 'Jan 5 2024',
      firstName: 'Adam',
      lastName: 'Dennis',
      requestingStaff: 'HR',
      admin: 'HR',

    }

  ];


  const columns = [

    {

      header: 'Room Booked',
      accessorFn: row => `${row.firstName} ${row.lastName}`
    },

    {
      header: 'Requesting Staff',
      accessorKey: 'requestingStaff'
    },

    {
      header: 'Admin Team Approver',
      accessorKey: 'admin'
    },

    {
      header: 'Booking Date',
      accessorKey: 'bookingDate'
    },

  ]


  const data = useMemo(() => staffInfo, [])
  const [filter, setFilter] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const [booking, setBooking] = useState(false);
  const [approval, setApproval] = useState();


 const table = MessageBoardTable(data, columns, flexRender, filter, rowSelection, setFilter, setRowSelection);
  
  return (
    <div>
      <MobileNav />
      <div className='flex items-align bg-blue-gray-50'>
      <Header />

      <div className='w-[90%] mx-4'>

        <TableHeader />

        <div className='flex justify-between items-center mt-6 mb-5 '>
          <p className='font-bold text-xl text-accent '>Administration - Confrence Room</p>

          <div className='flex gap-4'>
            <button onClick={()=> setBooking(!booking)} className='flex items-center gap-2 text-black  hover:text-white rounded-full px-4 py-2 ring-2 font-bold ring-accent hover:bg-accent'>Book</button>
            <button className='flex items-center gap-2 text-black hover:text-white rounded-full px-4 py-2 ring-2 font-bold ring-accent hover:bg-accent'>Approve</button>
            <input className=' ring-2 ring-accent text-black focus:outline-accent px-2 rounded-lg font-bold ' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
          </div>

        </div>


        <div className='lg:w-[50%] lg:mx-auto'>
          {booking ? <BookingForm close={booking} closeHandler={closeHandler} /> : ''}
        </div>


        <table className='relative'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => <th key={header.id}>
                {flexRender(header.column.columnDef.header,
                  header.getContext()
                )}
              </th>)}
            </tr>

          ))}

          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell,
                      cell.getContext())}

                  </td>
                ))}

              </tr>
            ))}
          </tbody>



        </table>

        <div className='flex gap-4 mt-10 '>

          {/* <button onClick={() => table.setPageIndex(0)} className='ring-2 ring-[#F64514]  p-2 rounded-lg'>First Page</button> */}
          <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='text-black font-bold ring-2 ring-accent hover:bg-accent hover:text-white py-2 px-4 rounded-full shadow-lg'>Prev Page</button>
          <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='text-black font-bold ring-2 ring-accent hover:bg-accent py-2 px-4 hover:text-white rounded-full shadow-lg'>Next Page</button>
          {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

        </div>

      </div>


    </div>
    </div>
    
  );


};

export default ConfrenceRoom;
