import React, { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';

// import MessageCard from '../Administration/modals/messageCard';
import Pencil from "../../Assets/icons/pencil.png"
import Add from "../../Assets/icons/add.png"



import '../../table.css'
import { flexRender } from '@tanstack/react-table';

// Sample user for table population
const Invoice = () => {

  const staffInfo = [

    {
      id: 1,
      sales: "Tomato",
      purchase: "Plantain",
      invoice: "23-23AY89",
      pettyCash: "#23,900"

    },

    {
      id: 2,
      sales: "Tomato",
      purchase: "Plantain",
      invoice: "23-23AY89",
      pettyCash: "#23,900"

    },

    {
      id: 3,
      sales: "Tomato",
      purchase: "Plantain",
      invoice: "23-23AY89",
      pettyCash: "#23,900"

    }


  ];

  const [message, setMessage] = useState(false)



  const data = useMemo(() => staffInfo, [])

  const columns = [
    {
      header: 'SN',
      accessorKey: 'id'
    },



    {

      header: 'Sales',
      accessorKey: 'sale'
    },

    {
      header: 'Purchases',
      accessorKey: 'purchase'
    },

    {
      header: 'Invoice',
      accessorKey: 'invoice'

    },

    {
      header: 'Petty Cash',
      accessorKey: 'pettyCash'
    }



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
            <p className='font-bold text-xl text-accent '>Finance - Invoice</p>

            <div className='hidden lg:flex gap-10'>
              <button className='flex items-center gap-2 font-bold  rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Add New</button>
              <button className='flex items-center gap-2 font-bold   rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Send Email</button>
              <button className='flex items-center gap-2 font-bold   rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Notes</button>
              <button className='flex items-center gap-2 font-bold   rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Schedule Meeting</button>
              <button className='flex items-center gap-2 font-bold   rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Task Reminder</button>
              <button className='flex items-center gap-2 font-bold   rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent'>Log Activities</button>
              <input className=' ring-2 ring-accent px-2 rounded-full font-bold ' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
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

            {/* <button onClick={() => setMessage(!message)} className='absolute  right-0 mt-2 mr-4 x-10 shadow-lg  hover:bg-white px-4 py-2 rounded-full flex gap-2 items-center text-[#F66C4E] font-bold border-2 border-[#F66C4E]'><img src={Pencil} alt="A pencil icon" />Compose </button> */}

          </table>

          <div className='flex gap-4 mt-10 '>

            {/* <button onClick={() => table.setPageIndex(0)} className='ring-2 ring-[#F64514]  p-2 rounded-lg'>First Page</button> */}
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='ring-2 ring-accent hover:bg-accent p-2 rounded-lg'>Prev Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='ring-2 ring-accent hover:bg-accent p-2 rounded-lg'>Next Page</button>
            {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

          </div>

          {/* <div className='lg:w-[50%] lg:mx-auto'>
            {message ? <MessageCard /> : ''}


          </div> */}


        </div>

      </div>
    </div>


  );


};

export default Invoice;
