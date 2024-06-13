import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cancel from '../../../Assets/icons/cancel.png'
import {getDepartment} from '../apis/departments/getDept';

const AddStaff = ({ close, closeForm }) => {

    const [isLoading, setIsLoading] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const errorMessage = () => {
        toast.error("Staff could not be created..");
    };

    const successMessage = () => {
        toast.success('Staff created successfully')
    }


    const createStaff = async (data) => {

        setIsLoading(true);
        try {
            const url = 'https://dma-saas.azurewebsites.net/api/staff';
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(url, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "*/*",
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(data)
            })

            successMessage();
            reset();

    
            console.log(response);
            console.log(data);
        } catch (error) {
            errorMessage();
            reset();
            throw new Error("Network response not okay")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className=" mb-8 lg:p-10 shadow-lg rounded-lg md:w-[50%] lg:w-[50%]  md:ml-auto md:mr-auto bg-white mx-auto absolute z-10 ">

            <ToastContainer
                autoClose={2000}
            />

            <div className="flex items-center justify-between pb-10">
                <div className="text-3xl text-center text-accent font-bold">CREATE STAFF</div>

                <div onClick={() => closeForm(close)}>
                    <img src={cancel} alt="close button" />

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
                        <div className="flex gap-2">First name <div className="text-red-500">*</div></div>
                        <input
                            {...register("firstName", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.firstName?.message}</div>
                    </label>

                    <label htmlFor="lastName">
                        <div className="flex gap-2">Last name <div className="text-red-500">*</div></div>
                        <input
                            {...register("lastName", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.lastName?.message}</div>
                    </label>
                </div>

                <div className="grid gap-10 grid-cols-2">



                    <label for="department-select">
                        <div className="flex gap-2">Department name <div className="text-red-500">*</div></div>

                        <div onChange={(e)=> getDepartment}></div>


                        <select name="department"
                            {...register("departmentName", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-[#F64514] focus:border-transparent placeholder-black" >

                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Product Design">Product Design</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="Chemical Engineer">Chemical Engineer</option>
                            <option value="Cocaine">Cocaine</option>

                        </select>

                        <div className="text-red-500">{errors.departmentName?.message}</div>
                    </label>

                    <label htmlFor="address">
                        <div className="flex gap-2">Address <div className="text-red-500">*</div></div>
                        <input
                            {...register("address", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.address?.message}</div>
                    </label>



                </div>

                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="email">
                        <div className="flex gap-2">Email <div className="text-red-500">*</div></div>
                        <input
                            {...register("email", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.email?.message}</div>
                    </label>

                    <label htmlFor="staffCompanyEmail">
                        <div className="flex gap-2">Company mail <div className="text-red-500">*</div></div>
                        <input
                            {...register("staffCompanyEmail", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.staffCompanyEmail?.message}</div>
                    </label>
                </div>


                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="serialNumber">
                        <div className="flex gap-2">Serial number <div className="text-red-500">*</div></div>
                        <input
                            {...register("serialNumber", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.serialNumber?.message}</div>
                    </label>

                    <label htmlFor="idNumber">
                        <div className="flex gap-2">Id Number <div className="text-red-500">*</div></div>
                        <input
                            {...register("idNumber", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.idNumber?.message}</div>
                    </label>
                </div>

                <div className="">



                    <label htmlFor="dateOfBirth">
                        <div className="flex gap-2">Date of Birth <div className="text-red-500">*</div></div>

                        <input type="datetime-local" name="dob"
                            {...register("dateOfBirth", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent placeholder-black"

                        />
                        <div className="text-red-500" >{errors.dateOfBirth?.message}</div>

                    </label>


                </div>

            </form>


            <div className="px-10 pb-10">


                <button onClick={handleSubmit(createStaff)}
                    className="bg-accent w-[100%] hover:bg-deepBlue text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Create Staff</>
                    )}

                </button>

            </div>

        </div>
    );
};

export default AddStaff;
