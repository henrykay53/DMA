import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import Close from "../../../Assets/icons/cancel.png"



const AddStaff = ({ close, closeHandler }) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [dateValue, setDateValue] = useState('');



    const createStaff = async (data) => {

        setIsLoading(true);


        try {
            const url = '';
            const accessToken = data.accessToken;

            const response = await fetch(url, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "*/*",
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(data)
            })

            console.log("res:", response);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }


    }

    const getDateValue = () => {

        setDateValue(dateValue);

    }




    return (
        <div className="w-[95%] lg:w-[40%] shadow-lg rounded-sm mt-10 mb-40 absolute top-40 p-5 z-10 bg-white">




            <div className="flex items-center justify-between mb-6">

                <div className="text-3xl lg:text-4xl  text-center text-accent font-bold">Add Supply</div>
                <div className="p-2 bg-red-500 rounded-full" onClick={() => closeHandler()}>
                    <img src={Close} alt="" />
                </div>


            </div>
            <form
                onSubmit={handleSubmit(createStaff)}
                className="ml-4 mr-4 mt-4"
                action=""
                id="staffCreationForm"
            >

                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="firstName">
                        <div className="flex gap-2">Item <div className="text-red-500">*</div></div>
                        <input
                            {...register("item", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.item?.message}</div>
                    </label>

                    <label htmlFor="lastName">
                        <div className="flex gap-2">Unit <div className="text-red-500">*</div></div>
                        <input
                            {...register("unit", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.unit?.message}</div>
                    </label>
                </div>

                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="department">
                        <div className="flex gap-2">Received by (staff name) <div className="text-red-500">*</div></div>
                        <input
                            {...register("receiver", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.receiver?.message}</div>
                    </label>

                    <label htmlFor="dateReceived">
                        <div className="flex gap-2">Date of Received <div className="text-red-500">*</div></div>

                        <input type="datetime-local" name="dob"
                            {...register("dateReceived", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent placeholder-black"

                        />
                        <div className="text-red-500" >{errors.dateReceived?.message}</div>

                    </label>

                   
                </div>

              

                <label htmlFor="serialNumber">
                    <div className="flex gap-2">Status <div className="text-red-500">*</div></div>
                    <input
                        {...register("status", { required: "Field can not be empty" })}
                        className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent
                placeholder-black"
                        type="text"
                    />

                    <div className="text-red-500">{errors.status?.message}</div>
                </label>

            </form>


            <div className="px-10 pb-10">


                <button onClick={handleSubmit(createStaff)}
                    className="bg-accent hover:bg-skyBlue w-[100%] hover:text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Save</>
                    )}

                </button>

            </div>









        </div>
    );
};

export default AddStaff;
