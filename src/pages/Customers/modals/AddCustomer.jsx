import React, { useState } from "react";
import { createCustomerApi } from "../apis/createCustomerApi";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cancel from "../../../Assets/icons/cancel.png"



const AddCustomer = ({ close, closeForm }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const errorMessage = () => {
        toast.error("Customer could not be created..");
    };

    const successMessage = () => {
        toast.success('Customer created successfully')
    }

    const [isLoading, setIsLoading] = useState(false);


    const createCustomer = async (data) => {

        setIsLoading(true);
        try {
            const response = await createCustomerApi(data);
            successMessage();
            reset();
            
            console.log("res:", response);
            console.log(data);

        } catch (error) {
            errorMessage();
            reset();
            throw error;

           
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="mb-8 lg:p-10 shadow-lg rounded-lg md:w-[50%] lg:w-[50%]  md:ml-auto md:mr-auto bg-white mx-auto absolute top-40 z-10 ">

            <ToastContainer
                autoClose={2000}
            />

            <div className="flex justify-between  ">
                <div className="text-3xl lg:text-4xl pb-10 text-center text-[#F64514] font-bold">Add Customer</div>

                <div onClick={() => closeForm(close)}>
                    <img src={cancel} alt="close icon" />
                </div>

            </div>



            <form
                onSubmit={handleSubmit(createCustomer)}
                className="ml-4 mr-4 mt-4"
                action=""
                id="staffCreationForm"
            >

                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="name">
                        <div className="flex gap-2">Name <div className="text-red-500">*</div></div>
                        <input
                            {...register("name", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.name?.message}</div>
                    </label>

                    <label htmlFor="gender">
                        <div className="flex gap-2">Gender <div className="text-red-500">*</div></div>
                        <select name="gender"
                            {...register("gender", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-[#F64514] focus:border-transparent placeholder-black" >

                            <option value='3'>Male</option>
                            <option value='2'>Female</option>
                            <option value='1'>Others</option>
                        </select>

                        <div className="text-red-500">{errors.gender?.message}</div>
                    </label>
                </div>

                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="phone">
                        <div className="flex gap-2">Phone <div className="text-red-500">*</div></div>
                        <input
                            {...register("phone", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.phone?.message}</div>
                    </label>

                    <label htmlFor="email">
                        <div className="flex gap-2">Email <div className="text-red-500">*</div></div>
                        <input
                            {...register("email", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.email?.message}</div>
                    </label>
                </div>

                <div className="grid gap-10 grid-cols-2">


                    <label for="lead-select">
                        <div className="flex gap-2">Lead Status <div className="text-red-500">*</div></div>


                        <select name="lead"
                            {...register("leadStatus", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-[#F64514] focus:border-transparent placeholder-black" >

                            <option value='1'>New</option>
                            <option value='2'>Open</option>
                            <option value='3'>In progres..</option>
                            <option value='4'>Closed</option>
                        </select>

                        <div className="text-red-500">{errors.leadStatus?.message}</div>
                    </label>


                    <label for="business-select">
                        <div className="flex gap-2">Business Type <div className="text-red-500">*</div></div>


                        <select name="business"
                            {...register("businessType", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-[#F64514] focus:border-transparent placeholder-black" >

                            <option value="0">Others</option>
                            <option value="1">Manufacturer</option>
                            <option value="2">Wholesaler</option>
                            <option value="3">Retailer</option>
                            <option value="4">Service</option>
                            <option value="5">Maintenance</option>
                        </select>

                        <div className="text-red-500">{errors.businessType?.message}</div>
                    </label>

                </div>




                <div className="grid gap-10 grid-cols-2">
                    <label htmlFor="companyName">
                        <div className="flex gap-2">Company Name <div className="text-red-500">*</div></div>
                        <input
                            {...register("companyName", { required: "Field can not be empty" })}
                            className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />

                        <div className="text-red-500">{errors.companyName?.message}</div>
                    </label>

                    <label htmlFor="Company Address">
                        <div className="flex gap-2">Company Address <div className="text-red-500">*</div></div>
                        <input
                            {...register("companyAddress", { required: "Field can not be empty" })}
                            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                            type="text"
                        />
                        <div className="text-red-500">{errors.companyAddress?.message}</div>
                    </label>
                </div>



            </form>


            <div className="px-10 pb-10">


                <button onClick={handleSubmit(createCustomer)}
                    className="bg-[#F64514] w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Create Customer</>
                    )}

                </button>

            </div>

        </div>
    );
};

export default AddCustomer;
