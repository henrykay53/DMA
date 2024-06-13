import React, { useState } from "react";
import {createDept} from '../apis/departments/createDept'
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cancel from "../../../Assets/icons/cancel.png"




const AddCustomer = ({ dept, closeDeptForm }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const errorMessage = () => {
        toast.error("Department could not be created..");
    };

    const successMessage = () => {
        toast.success('Department created successfully')
    }

    const [isLoading, setIsLoading] = useState(false);


    const createDepartment = async (data) => {

        setIsLoading(true);
        try {
            const response = await createDept(data);
            successMessage();
            reset();

            console.log("res:", response);
            console.log(response.message);
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
                <div className="text-3xl lg:text-4xl pb-10 text-center text-accent font-bold">Create Department</div>

                <div onClick={() => closeDeptForm(dept)}>
                    <img src={cancel} alt="close icon" />
                </div>

            </div>



            <form
                onSubmit={handleSubmit(createDepartment)}
                className="ml-4 mr-4 mt-4"
                action=""
                id="staffCreationForm"
            >


                <label htmlFor="name">
                    <div className="flex gap-2">Enter the department <div className="text-red-500">*</div></div>
                    <input
                        {...register("name", { required: "Field can not be empty" })}
                        className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                        type="text"
                    />

                    <div className="text-red-500">{errors.name?.message}</div>
                </label>

            </form>


            <div className="px-10 pb-10">


                <button onClick={handleSubmit(createDepartment)}
                    className="bg-accent w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Create Department</>
                    )}

                </button>

            </div>

        </div>
    );
};

export default AddCustomer;
