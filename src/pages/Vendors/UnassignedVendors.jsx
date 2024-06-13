import React, { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav';
import { MessageBoardTable } from '../../components/MessageBoardTable';

import Add from "../../Assets/icons/add.png"
import Checkbox from '../../components/Modals/Checkbox';


//Styles for table 
import '../../table.css'
import { flexRender } from '@tanstack/react-table';


const UnassignedVendors = () => {

    // Sample user for table population
    const staffInfo = [

        {
            id: 1,
            name: 'Stephanie',
            gender: 'female',
            phone: '090495859',
            email: '@yahooo',
            company: 'Jun 15, 2023',
            address: 'Aug 15, 2023',
            date: 'Aug 15, 2023',
            assigned: 'Justice',
            type: 'Enterprise',
            status: 'Sent'
        },

        {
            id: 2,
            name: 'Alexis',
            gender: 'female',
            phone: '08045439',
            email: '@yahooo',
            company: 'SwissTrade',
            address: '1 Keffie cls',
            date: 'Aug 15, 2023',
            assigned: 'Anthony',
            type: 'Enterprise',
            status: 'Sent'
        },

        {
            id: 3,
            name: 'Stephene',
            gender: 'male',
            phone: '09090859',
            email: '@email',
            company: 'Oct 15, 2023',
            address: 'Aug 15, 2023',
            date: 'Aug 15, 2023',
            assigned: 'Justice',
            type: 'Enterprise',
            status: 'Sent'

        },

        {
            id: 4,
            name: 'James',
            gender: 'male',
            phone: '090234859',
            email: '@yahoooooo',
            company: 'Feb 5, 2093',
            address: 'Aug 15, 2023',
            date: 'Aug 15, 2023',
            assigned: 'Justice',
            type: 'Enterprise',
            status: 'Sent'
        },


    ];






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

            header: 'Contact Name',
            accessorKey: 'name'
        },

        {
            header: 'Gender',
            accessorKey: 'gender'
        },

        {
            header: 'Phone Number',
            accessorKey: 'phone'

        },

        {
            header: 'Email',
            accessorKey: 'email'
        },

        {
            header: 'Company Name',
            accessorKey: 'company'
        },

        {
            header: 'Company Address',
            accessorKey: 'address'
        },

        {
            header: 'Date Created',
            accessorKey: 'date'
        },

        {
            header: 'Assigned Person',
            accessorKey: 'assigned'
        },

        {
            header: 'Business Type',
            accessorKey: 'type'
        },

        {
            header: 'Status',
            accessorKey: 'status'
        }

    ]


    // states for module functionalities
    // const [addNew, setAddNew] = useState();
    // const [sendMail, setSendMail] = useState();
    // const [notes, setNotes] = useState();
    // const [scheduleMeeting, setScheduleMeeting] = useState();
    // const [taskReminder, setTaskReminder] = useState();
    // const [logActivities, setLogActivities] = useState();


    //table states 
    const data = useMemo(() => staffInfo, [staffInfo]);
    const [filter, setFilter] = useState('');
    const [rowSelection, setRowSelection] = useState({});


    const table = MessageBoardTable(data, columns, flexRender, filter, rowSelection, setFilter, setRowSelection);






    return (
        <div>
            <MobileNav />
            <div className='flex items-align'>
                <Header />

                <div className='w-[90%] mx-auto lg:mx-4'>
                    <TableHeader />

                    <div className='flex justify-between items-center mt-6 mb-5 '>
                        <p className='font-bold text-xl text-accent '>Vendors - Unassigned Vendors</p>

                        <div className='hidden lg:flex gap-4'>
                            <button className='flex items-center gap-2 font-bold text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Add New <img src={Add} /></button>
                            <button className='flex items-center gap-2 font-bold  text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Send Email</button>
                            <button className='flex items-center gap-2 font-bold  text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Notes</button>
                            <button className='flex items-center gap-2 font-bold  text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Schedule Meeting</button>
                            <button className='flex items-center gap-2 font-bold  text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Task Reminder</button>
                            <button className='flex items-center gap-2 font-bold  text-accent rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Log Activities</button>
                            <input className=' ring-2 focus:outline-accent ring-accent px-2 rounded-lg font-bold text-black' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
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
                        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='font-bold ring-2 ring-accent text-black hover:text-white hover:bg-accent p-2 rounded-full'>Prev Page</button>
                        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='font-bold ring-2 ring-accent text-black hover:text-white hover:bg-accent p-2 rounded-full'>Next Page</button>
                        {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

                    </div>


                </div>



            </div>

        </div>

    );


};

export default UnassignedVendors;
