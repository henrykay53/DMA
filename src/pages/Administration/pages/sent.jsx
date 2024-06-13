import React from "react";
import { useState, useMemo } from "react";

import { MessageBoardTable } from "../../../components/MessageBoardTable";
// Styles for table
import '../../../table.css'
import Checkbox from '../../../components/Modals/Checkbox';
import { flexRender } from "@tanstack/react-table";




const MessageBoard = () => {


  const [message, setMessage] = useState(false);
  const [filter, setFilter] = useState('');
  const [rowSelection, setRowSelection] = useState({});


  //this close handler passes setMessage functionalities to the child component messageCard
  const closeHandler = () => {
    setMessage();
  }



  // Sample user for table population
  const staffInfo = [


    {
      id: 1,
      firstName: 'Stephanie',
      lastName: 'Yahaya',
      mobile: '090495859',
      email: '@yahooo',
      dateCreated: 'Jun 15, 2023',
      role: 'Human resourse'
    },

    {
      id: 2,
      firstName: 'Alexandru',
      lastName: 'Greene',
      mobile: '090495859',
      email: '@yahooo',
      dateCreated: 'Jun 15, 2023',
      role: 'Human resourse'

    },
  ]

  const data = useMemo(() => staffInfo, []);


  const columns = [

    {
      id: "select",
      header: ({ table }) => (
        <Checkbox

          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),

      cell: ({ row }) => {
        return (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        );
      },

    },






    {

      header: 'Name',
      accessorFn: row => `${row.firstName} ${row.lastName}`
    },

    {
      header: 'Role',
      accessorKey: 'role'
    },

    {
      header: 'Email',
      accessorKey: 'email'
    },

    {
      header: 'Mobile',
      accessorKey: 'mobile'
    },

    {
      header: 'Date created',
      accessorKey: 'dateCreated'
    },

  ]

  const table = MessageBoardTable(data, columns, flexRender, filter, setFilter, rowSelection, setRowSelection);




  return (


    <div>

    

      <div className="">
      

      





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
          <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='text-black font-bold ring-2 ring-accent focus:ring-[] hover:bg-accent hover:text-white py-2 px-4 rounded-full shadow-lg'>Next Page</button>
          {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

        </div>

       

      </div>

    </div>
  );


};

export default MessageBoard;
