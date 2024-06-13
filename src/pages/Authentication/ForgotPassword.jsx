import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

// Toastify for pop up notifications
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');



    const {

        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const successMessage = () => {
        toast.success("Check your email for your otp");
    };

    const errorMessage = () => {
        toast.error("Account does not exist");
    };


    const proceedToCongratsPage = () => {
        navigate('/congrats')

    }

    const submitUserData = async (data) => {

        setIsLoading(true);


        const url = "https://dma-saas.azurewebsites.net/api/forgot-password"

        await fetch(url, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*',
    
            },

            body: JSON.stringify({
                email: email,

            })

        })

            .then((response) => {
                if(!response.ok) {

                    errorMessage()
                    window.location.reload()
                }
                if (response.ok) {
                 successMessage()
                 (setTimeout(() => proceedToCongratsPage(), 3000))
                }
                return response.json()

            })
            .then((data) => {
            
            }).catch((err) => {
                console.log(err);
            })

    }


    return (
        <div className="mt-36 mb-auto md:w-[40%] md:ml-auto md:mr-auto">

            <ToastContainer
                autoClose={2000}
            />


            <div className="text-4xl text-center text-[#F64514] font-bold">Forgot password</div>

            <form className="ml-4 mr-4 mt-4"
                action="POST">

                <label htmlFor="">
                    <input
                        {...register("email", { required: "Field can not be empty" })}
                        className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}

                    />

                    <div>{errors.email?.message}</div>
                </label>




                <button onClick={handleSubmit(submitUserData)}
                    className="bg-[#F64514] w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Send Email</>
                    )}

                </button>
            </form>



        </div>
    );
};

export default Login;
