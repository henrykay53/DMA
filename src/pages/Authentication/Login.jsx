import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "iconsax-react";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [eye, setEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {

    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const errorMessage = () => {
    toast.error("Enter a valid email or password");
  };


  const navigate = useNavigate();

  const submitUserData = async () => {

    setIsLoading(true);

    try {

      const url = "https://dma-saas.azurewebsites.net/api/signin"
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);

      const response = await fetch(url, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),

      })

      

      if (!response.ok) {
        throw new Error("Network response was not okay");
      }

      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      console.log(data);


      if (data.accessToken) {
        navigate('/companies')
      }


      else {
        errorMessage();

        // setTimeout(() => {
        //   window.location.reload()

        // }, 2000);

      }

    } catch (error) {
      console.error("There was an error!", error);
      errorMessage();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    } finally {
      setIsLoading(false);
    }
  };





  return (
    <div className="mt-36 mb-auto md:w-[40%] md:ml-auto md:mr-auto">

      <ToastContainer
        autoClose={2000}
      />


      <div className="text-4xl text-center text-accent font-bold">Sign in</div>

      <form className="ml-4 mr-4 mt-4"
        action="POST">

        <label htmlFor="">
          <input
            {...register("email", { required: "Field can not be empty" })}
            className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
            placeholder-black"
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}

          />

          <div>{errors.email?.message}</div>
        </label>

        <label htmlFor="">
          <div className="relative">
            <input
              {...register("password", { required: "Field can not be empty" })}
              className="p-3 mt-4 w-[100%] bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
              placeholder-black"
              type={eye ? "text" : "password"}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}

            />

            <div
              className="icon_button absolute right-4 top-7"
              onClick={() => setEye(!eye)}
            >
              {eye ? (
                <Eye color="#000000" className="h-6 font-extralight" />
              ) : (
                <EyeSlash className="h-6 font-extralight" />
              )}
            </div>
          </div>

          <div>{errors.password?.message}</div>
        </label>


        <button onClick={handleSubmit(submitUserData)}
          className="bg-accent w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">

          {isLoading ? (
            <Spinner className="fill-primary mx-auto" color="accent" />
          ) : (
            <>Login</>
          )}

        </button>
      </form>

      <div className="flex gap-2 mt-4">
        <p className="ml-4">Forgot password? </p>
        <Link className="text-accent" to="/forgotpassword">
          Reset password.
        </Link>
      </div>


    </div>
  );
};

export default Login;
