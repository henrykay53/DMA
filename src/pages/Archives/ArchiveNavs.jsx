import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveNavs = () => {

    return (

        <div className='flex gap-2'>

            <Link to="/archives">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>All</button>
            </Link>

            <Link to='/contracts'>
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Contracts</button>
            </Link>
            <Link to="/letters">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Letters</button>
            </Link>
            <Link to="/reports">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Reports</button>
            </Link>
            <Link to="/drawings">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Drawing Illustrations</button>
            </Link>
            <Link to="/certificate">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Certificate License</button>
            </Link>
            <Link to="/approvals">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Approvals</button>
            </Link>
            <Link to="/media">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Media</button>
            </Link>
            <Link to="/receipts">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Receipts</button>
            </Link>
            <Link to="/purchaseDoc">
                <button className='flex items-center gap-2 font-bold  text-black rounded-sm p-2 ring-2 ring-accent hover:bg-accent hover:text-white'>Purchase Orders</button>
            </Link>

        </div>


    );



}

export default ArchiveNavs;
