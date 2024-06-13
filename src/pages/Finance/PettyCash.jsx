import React, { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';

import Add from "../../Assets/icons/add.png"



import '../../table.css'
import { flexRender } from '@tanstack/react-table';

// Sample user for table population
const PettyCash = () => {

  const staffInfo = [

    {
      id: 1,
      moneyIn: 20000,
      moneyOut: 5000,
      total: "Null",
      givenTo: "Tega"

    },

    {
      id: 2,
      moneyIn: 457000,
      moneyOut: 849000,
      total: "Null",
      givenTo: "Tobi"

    },

    {
      id: 3,
      moneyIn: 20000,
      moneyOut: 5000,
      total: "Null",
      givenTo: "Tega"

    },


    {
      id: 4,
      moneyIn: 20000,
      moneyOut: 5000,
      total: "Null",
      givenTo: "Tega"

    },

  ];



  const data = useMemo(() => staffInfo, [])

  const columns = [
    {
      header: 'SN',
      accessorKey: 'id'
    },



    {

      header: 'Money In',
      accessorKey: 'moneyIn'
    },

    {
      header: 'Money Out',
      accessorKey: 'moneyOut'
    },

    {
      header: 'Given To',
      accessorKey: 'givenTo'
    },

    {
      header: 'Total',
      accessorKey: 'total'

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
            <p className='font-bold text-xl text-accent '>Finance - Petty Cash</p>

            <div className='flex gap-10'>
              <input className=' ring-2 ring-accent p-2 rounded-sm font-bold' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
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
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='ring-2 ring-accent hover:bg-[#F66C4E] p-2 rounded-lg'>Prev Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='ring-2 ring-accent hover:bg-[#F66C4E] p-2 rounded-lg'>Next Page</button>
            {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

          </div>

        </div>

      </div>
    </div>


  );


};

export default PettyCash;
