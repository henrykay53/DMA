import React from 'react'
import { useState, useEffect } from 'react'
import Close from "../../../Assets/icons/cancel.png"

function MessageCard({close, closeHandler}) {

    const [title, setTitle] = useState();
    const [message, setMessage] = useState();



    const url = "https://dma-saas.azurewebsites.net/api/message";

    const SendMessage = () => {

        useEffect(() => {

            fetch(url, {

                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*'
                },

                body: JSON.stringify({

                    title: title,
                    message: message,
                })

            })

                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => console.log(error));

        }, []);

    }





    return (
        <div className='w-[95%] mx-auto absolute mt-20 lg:w-[40%] shadow-lg rounded-sm lg:mt-10 mb-40 lg:absolute top-40  z-10 bg-white'>
            <div className=' bg-accent flex justify-between items-center px-6 py-4'>
                <p className='text font-bold' >
                    New Message
                </p>

                <div onClick={()=> closeHandler(close)} className='bg-red-500 shadow-lg p-2 rounded hover:bg-[#F66C4E4D]'>
                    <img src={Close} alt="Close Icon" />
                </div>

            </div>

            <div className='flex items-center gap-4 px-6 py-4'>
                <p className='font-bold'>Title:</p>
                <input onChange={e => setTitle(e.target.value)} className='outline-none w-[100%]' type="text" />


            </div>

            <div className='border-b-2 border-accent'></div>

            <div className='py-4 px-4'>

                <p className='text font-bold mb-2'>Message</p>
                <textarea onChange={e => setMessage(e.target.value)} className='ring-2 ring-accent border-accent w-[100%] px-4 py-2' id="w3review" name="w3review" rows="4" cols="50"></textarea>

            </div>
            <div className='px-4 pb-10'>
                <button onClick={() => SendMessage()} className='hover:text-white font-bold ring-2 ring-accent hover:bg-skyBlue px-6 py-2 rounded-full'>Send</button>


            </div>




        </div>
    )
}

export default MessageCard