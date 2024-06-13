import React from "react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import TableHeader from "../../components/Modals/tableHeader"
import Header from "../../components/Header"
import MobileNav from '../../components/Modals/MobileNav'
import MessageCard from './modals/messageCard';
import email from "../../Assets/icons/email.png"
import paper from "../../Assets/icons/paper.png"
import trash from "../../Assets/icons/trash.png"
import pencil from "../../Assets/icons/pencil.png"
import Inbox from "../Administration/pages/inbox"
import Sent from "../Administration/pages/sent"
import Trash from "../Administration/pages/trash"




import { MessageBoardTable } from "../../components/MessageBoardTable";
// Styles for table
import '../../table.css'
import Checkbox from '../../components/Modals/Checkbox';
import { flexRender } from "@tanstack/react-table";
// import { flexRender } from "@tanstack/react-table";




const MessageBoard = () => {


  const [message, setMessage] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [sent, setSent] = useState(false);
  const [trash, setTrash] = useState(false)
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
      <MobileNav />
      <div className="flex items-align bg-blue-gray-50">

        <Header />

        <div className="w-[100%] mx-4 ">
          <TableHeader />

          <div className='flex justify-between items-center  mb-5 bg-accent p-3 rounded-br-sm rounded-bl-sm'>
            <p className='font-bold text-xl text-white '>Administration - Message Board</p>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2" onClick={() => setInbox(!inbox)}>
                <img src={email} alt="" />
                <p className="font-bold text-white">Inbox</p>
              </div>

              <div className="flex items-center gap-2" onClick={() => setSent(!sent)}>
                <img src={paper} alt="" />
                <p className="font-bold text-white">Sent</p>
              </div>

              <div className="flex items-center gap-2" onClick={() => setTrash(!trash)}>
                <img src={trash} alt="" />
                <p className="font-bold text-white">Trash</p>

              </div>

            </div>

            <div>
              <input className='hidden ring-2 ring-white focus:outline-white p-2 ml-2 rounded-sm text-lg font-bold text-[#F64514]  focus:bg-white focus:text-[#F64514] placeholder:text-black focus:placeholder:text-[#F64514]' placeholder='Search' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>

          </div>

          <div className='lg:w-[50%] lg:mx-auto'>
            {message ? <MessageCard close={message} closeHandler={closeHandler} /> : ''}
          </div>

          <div className=''>
            {inbox ? <Inbox /> : ''}
          </div>

          <div className=''>
            {sent ? <Sent /> : ''}
          </div>

          <div className=''>
            {trash ? <Trash /> : ''}
          </div>

        </div>

      </div>
    </div>



  );


};

export default MessageBoard;
