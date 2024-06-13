import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { Eye, EyeSlash } from "iconsax-react";

// Toastify for pop up notifications
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Login = () => {

    const {token } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [eyeOne, setEyeOne] = useState(false);
    const [eyeTwo, setEyeTwo] = useState(false);
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const {

        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

 
    const successMessage = () => {
        toast.success("Password has been successfully reset...");
    };

    const navigate = useNavigate();
    console.log(password);
    console.log(confirmPassword);

    const submitUserData = async (data) => {

        setIsLoading(true);


        const url = "https://dma-saas.azurewebsites.net/api/password-reset";

        await fetch(url, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*',
                'Authorization':`Bearer ${token}`

            },

            body: JSON.stringify({
                password: password,
                confirmPassword: confirmPassword,
                token: token
            
            })

        })

            .then((response) => {
                // return response.json()
                console.log(response);

            })
            .then((data) => {

                successMessage()
                (setTimeout(() =>   navigate('/login'), 3000))
        
              
                
                console.log(password);
                console.log(confirmPassword);
        
            }).catch((err) => {
                console.log(err);
            })

    }


    return (
        <div className="mt-36 mb-auto md:w-[40%] md:ml-auto md:mr-auto">

            <ToastContainer
                autoClose={2000}
            />


            <div className="text-4xl text-center text-[#F64514] font-bold">Reset password</div>

            <p>This is your acces token: {token}</p>

            <form className="ml-4 mr-4 mt-4"
                action="POST">

                <label htmlFor="NewPassword">
                    <div className="relative">
                        <input
                            {...register("password", { required: "Field can not be empty" })}
                            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#F64514] focus:border-transparent
              placeholder-black"
                            type={eyeOne ? "text" : "password"}
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}

                        />

                        <div
                            className="icon_button absolute right-4 top-7"
                            onClick={() => setEyeOne(!eyeOne)}
                        >
                            {eyeOne ? (
                                <Eye color="#000000" className="h-6 font-extralight" />
                            ) : (
                                <EyeSlash className="h-6 font-extralight" />
                            )}
                        </div>
                    </div>

                    <div>{errors.password?.message}</div>
                </label>


                <label htmlFor="confirmPassword">
                    <div className="relative">
                        <input
                            {...register("confirmPassword", { required: "Field can not be empty" })}
                            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#F64514] focus:border-transparent
              placeholder-black"
                            type={eyeTwo ? "text" : "password"}
                            placeholder="Confirm Password"
                            onChange={e => setConfirmPassword(e.target.value)}

                        />

                        <div
                            className="icon_button absolute right-4 top-7"
                            onClick={() => setEyeTwo(!eyeTwo)}
                        >
                            {eyeTwo ? (
                                <Eye color="#000000" className="h-6 font-extralight" />
                            ) : (
                                <EyeSlash className="h-6 font-extralight" />
                            )}
                        </div>
                    </div>

                    <div>{errors.password?.message}</div>
                </label>






                <button onClick={handleSubmit(submitUserData)}
                    className="bg-[#F64514] w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">

                    {isLoading ? (
                        <Spinner className="fill-primary mx-auto" color="red" />
                    ) : (
                        <>Reset Password</>
                    )}

                </button>
            </form>



        </div>
    );
};

export default Login;
