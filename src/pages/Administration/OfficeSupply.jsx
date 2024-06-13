import React, { useMemo, useState } from 'react';
import TableHeader from "../../components/Modals/tableHeader"
import MobileNav from '../../components/Modals/MobileNav';
import Header from "../../components/Header"
import { MessageBoardTable } from '../../components/MessageBoardTable';
import InventoryCard from './modals/InventoryForm'




//Styles for table
import '../../table.css'
import { flexRender } from '@tanstack/react-table';
import { Mobile } from 'iconsax-react';


const OfficeSupply = () => {

    const [inventoryForm, setInventoryForm] = useState(false);

    const closeHandler = () => {
        setInventoryForm();
    }




    // Sample user for table population
    const staffInfo = [

        {
            id: 1,
            item: 'Ipad',
            unit: '6',
            receivedBy: 'Tega',
            dateReceived: 'Jun 15, 2023',
            remarks: 'Approved',

        },

        {
            id: 2,
            item: 'Water dispencer',
            unit: '2',
            receivedBy: 'Bims',
            dateReceived: 'Aug 15, 2024',
            remarks: 'Approved',

        },

        {
            id: 3,
            item: 'Chairs',
            unit: '4',
            receivedBy: 'Tobi',
            dateReceived: 'Apr 1, 2023',
            remarks: 'Approved',

        },

        {
            id: 4,
            item: 'Bikes',
            unit: '1',
            receivedBy: 'Aaron',
            dateReceived: 'Feb 15, 2023',
            remarks: 'Approved',

        },

        {
            id: 5,
            item: 'Printers',
            unit: '2',
            receivedBy: 'Queen',
            dateReceived: 'Jun 15, 2023',
            remarks: 'Approved',

        }
    ];





    const columns = [




        {
            header: 'SN',
            accessorKey: 'id'
        },



        {

            header: 'Item',
            accessorKey: 'item'
        },

        {
            header: 'Unit',
            accessorKey: 'unit'

        },

        {
            header: 'Received By',
            accessorKey: 'receivedBy'
        },

        {
            header: 'Date Received',
            accessorKey: 'dateReceived'
        },

        {
            header: 'Remarks',
            accessorKey: 'remarks'
        },



    ]

    const data = useMemo(() => staffInfo, []);
    const [filter, setFilter] = useState('');
    const [rowSelection, setRowSelection] = useState({});

    const table = MessageBoardTable(data, columns, flexRender, filter, rowSelection, setFilter, setRowSelection);


    return (

        <div>
            <MobileNav />
            <div className='flex items-align bg-blue-gray-50 '>
                <Header />

                <div className='w-[90%] mx-4'>

                    <TableHeader />

                    <div className='flex justify-between items-center mt-6 mb-5 '>
                        <p className='font-bold text-xl text-accent '>Administration - Office Supply</p>

                        <div className='flex gap-10'>
                            <button onClick={() => setInventoryForm(!inventoryForm)} className='flex items-center gap-2 font-bold text-black rounded-full px-4 py-2 ring-2 ring-accent hover:text-white hover:bg-accent'>Add Supply</button>
                            <input className=' ring-2 ring-accent focus:outline-accent px-2 rounded-lg font-bold text-black' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
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
                        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} className='font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-2 rounded-full'>Prev Page</button>
                        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} className='font-bold text-black ring-2 ring-accent hover:text-white hover:bg-accent p-2 rounded-full'>Next Page</button>
                        {/* <button onClick={() => table.setPageIndex(table.getPageCount()-1)} className='ring-2 ring-[#F64514] p-2 rounded-lg'>Last Page</button> */}

                    </div>


                    <div className='lg:w-[50%] lg:mx-auto'>
                        {inventoryForm ? <InventoryCard close={inventoryForm} closeHandler={closeHandler} /> : ''}


                    </div>

                </div>

            </div>
        </div>


    );


};

export default OfficeSupply;
