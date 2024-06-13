import React, { useState, useEffect } from 'react';
import { fetchStaffData } from './apis/getStaffApi';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';
// import Add from "../../Assets/icons/add.png"
import AddStaff from './modals/AddEmployee';
import '../../table.css'
import { flexRender } from '@tanstack/react-table';
import DeptForm from './modals/createDeptForm'
import { Spinner } from '@material-tailwind/react';



const Employee = () => {

  const [staffs, setStaffs] = useState([]);
  const [dept, setDept] = useState(false);
  const [staffForm, setStaffForm] = useState(false);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  const closeForm = () => {
    setStaffForm();
  }

  const closeDeptForm = () => {
    setDept();
  }

  useEffect(() => {
    const getStaff = async () => {

      try {

        const staffInfos = await fetchStaffData();
        setStaffs(staffInfos.data);
        setIsLoading(false);


      } catch (error) {
        //setError(err.message);
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    getStaff();
  }, []);


  const columns = [
    {
      header: 'SN',
      accessorKey: 'id'
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
      header: 'Company Mail',
      accessorKey: 'staffCompanyEmail'
    }

  ]

  const table = MessageBoardTable(staffs, columns, flexRender, filter, setFilter);


  return (

    <div>
      <MobileNav />
      <div className='flex items-align bg-blue-gray-50'>
        <Header />

        {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}

        <div className='w-[90%] mx-auto lg:mx-4'>
          <TableHeader />

          <div className='lg:w-[50%] lg:mx-auto'>
            {staffForm ? <AddStaff close={staffForm} closeForm={closeForm} /> : ''}
          </div>

          <div className='lg:w-[50%] lg:mx-auto'>
            {dept ? <DeptForm dept={dept} closeDeptForm={closeDeptForm} /> : ''}


          </div>

          <div className='flex justify-between items-center mt-6 mb-5 '>
            <p className='font-bold text-xl text-accent '>Staff management - Employee</p>

            <div className='hidden lg:flex gap-2'>
              <button onClick={() => setStaffForm(!staffForm)} className='flex items-center gap-2 font-bold text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Add New</button>
              <button onClick={() => setDept(!dept)} className='flex items-center gap-2 font-bold text-black rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Create Department</button>

              <button className='flex items-center gap-2 font-bold  text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Send Email</button>
              <button className='flex items-center gap-2 font-bold  text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Notes</button>
              <button className='flex items-center gap-2 font-bold  text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Schedule Meeting</button>
              <button className='flex items-center gap-2 font-bold  text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Task Reminder</button>
              <button className='flex items-center gap-2 font-bold  text-black rounded-full px-4 py-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Log Activities</button>
              <input className=' ring-2 ring-accent px-2 rounded-full font-bold text-accent' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>

          </div>


          {isLoading ? (
            <Spinner className="fill-primary mx-auto" color="accent" />
          ) : (


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
          )}

          <div className='flex gap-4 mt-10 '>

            {/* <button onClick={() => table.setPageIndex(0)} className='ring-2 ring-[#F64514]  p-2 rounded-lg'>First Page</button> */}
            <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='ring-2 ring-accent hover:bg-accent p-2 rounded-lg'>Prev Page</button>
            <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='ring-2 ring-accent hover:bg-accent p-2 rounded-lg'>Next Page</button>
            {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

          </div>

        </div>

      </div>
    </div>


  );


};

export default Employee;
