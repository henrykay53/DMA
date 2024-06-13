import React, { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';
import Add from "../../Assets/icons/add.png"



import '../../table.css'
import { flexRender } from '@tanstack/react-table';

// Sample user for table population
const Inventory = () => {

  const staffInfo = [

    {
      id: 1,
      name: 'James',
      quantity: 10,
      supplier: '@yahoooooo',
      dop: 'Aug 15, 2023',
      dod: 'Aug 15, 2023',
      received: 'Justice',

    },

    {
      id: 2,
      name: 'James',
      quantity: 10,
      supplier: '@yahoooooo',
      dop: 'Aug 15, 2023',
      dod: 'Aug 15, 2023',
      received: 'Justice',

    },

    {
      id: 3,
      name: 'James',
      quantity: 10,
      supplier: '@yahoooooo',
      dop: 'Aug 15, 2023',
      dod: 'Aug 15, 2023',
      received: 'Justice',

    },

  ];


  const data = useMemo(() => staffInfo, [])

  const columns = [
    {
      header: 'SN',
      accessorKey: 'id'
    },



    {

      header: 'Name of Goods',
      accessorKey: 'name'
    },

    {
      header: 'Quantity',
      accessorKey: 'quantity'
    },

    {
      header: 'Supplier',
      accessorKey: 'supplier'

    },

    {
      header: 'Date of Purchase',
      accessorKey: 'dop'
    },

    {
      header: 'Date of Delivery',
      accessorKey: 'dod'
    },

    {
      header: 'Received By',
      accessorKey: 'received'
    },



  ]

  const [filter, setFilter] = useState('');
  const table = MessageBoardTable(data, columns, flexRender, filter, setFilter);




  return (
    <div>
      <MobileNav />
      <div className='flex items-align bg-blue-gray-50'>
        <Header />

        <div className='w-[90%] mx-auto lg:mx-4'>
          <TableHeader />

          <div className='flex justify-between items-center mt-6 mb-5 '>
            <p className='font-bold text-xl text-accent '>Operation - Inventory</p>

            <div className='hidden lg:flex gap-10'>
              <button className='flex items-center gap-2 font-bold text-black  hover:text-white rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Add New</button>
              <button className='flex items-center gap-2 font-bold  text-black hover:text-white  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Send Email</button>
              <button className='flex items-center gap-2 font-bold  text-black hover:text-white  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Notes</button>
              <button className='flex items-center gap-2 font-bold  text-black hover:text-white  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Schedule Meeting</button>
              <button className='flex items-center gap-2 font-bold  text-black hover:text-white  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Task Reminder</button>
              <button className='flex items-center gap-2 font-bold  text-black hover:text-white  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Log Activities</button>
              <input className=' ring-2 ring-accent focus:outline-accent px-2 rounded-full font-bold text-black' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>

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
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='ring-2 ring-accent  hover:text-white hover:bg-accent p-2 rounded-lg'>Prev Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='ring-2 ring-accent hover:text-white hover:bg-accent p-2 rounded-lg'>Next Page</button>
            {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

          </div>



        </div>

      </div>
    </div>


  );


};

export default Inventory;
