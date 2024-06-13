import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, ArrowCircleRight } from "iconsax-react";
import { useForm } from "react-hook-form";
import usePasswordValidation from "../../hooks/PasswordValidation";

// import Arrow from "../../public/images/Arrow.png"

const Signup = () => {
  const [eye, setEye] = useState(false);
  const [eyeTwo, setEyeTwo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  
  const url =  'https://dma-saas.azurewebsites.net/api/signup';

  const submitUserData = async (data) => {

    const  response = await fetch (url, {

    method: 'POST',

    headers: {'Content-Type': 'application/json',   "accept": "*/*"},

    body: JSON.stringify(data)
    })

    console.log("res:", response);
    console.log(data);
  }

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    isMatch,
    isLengthValid,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialCharacter,
  } = usePasswordValidation(password, confirmPassword);

  return (
    <div className=" mt-20 mb-8 md:w-[50%] lg:w-[40%] lg:p-10 pb-10 md:ml-auto md:mr-auto">

      {/* <img src={Arrow} alt="" /> */}
     

      <div className="text-4xl text-center text-orange-500 font-bold">Create your free account</div>
      <p className="flex justify-center py-6">100% free. No credit card needed.</p>

      <form
        onSubmit={handleSubmit(submitUserData)}
        className="ml-4 mr-4 mt-4 "
        action=""
      >

        <div className="grid gap-10 grid-cols-2">

          <label htmlFor="">
            <div className="flex gap-2">First Name <span className="text-red-500">*</span></div>
            <input
              {...register("first", { required: "Field can not be empty" })}
              className="p-3 mt-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
              placeholder-black"
              type="text"
              
            />

            <div className="my-2 text-red-900 font-bold">{errors.first?.message}</div>
          </label>

          <label htmlFor="">
          <div className="flex gap-2">Last Name <span className="text-red-500">*</span></div>
            <input
              {...register("last", { required: "Field can not be empty" })}
              className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
              placeholder-black"
              type="text"
              
            />
            <div className="my-2 text-red-900 font-bold">{errors.last?.message}</div>
          </label>

        </div>
        

        <label htmlFor="">
        <div className="flex gap-2">Email <span className="text-red-500">*</span></div>
          <input
            {...register("email", { required: "Field can not be empty" })}
            className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="email"
           
          />
          <div className="my-2 text-red-900 font-bold">{errors.email?.message}</div>
        </label>

        <label htmlFor="">
        <div className="flex gap-2">Phone Number <span className="text-red-500">*</span></div>
          <input
            {...register("phone", { required: "Field can not be empty" })}
            className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
          
          />
          <div className="my-2 text-red-900 font-bold">{errors.phone?.message}</div>
        </label>

        <label htmlFor="">
        <div className="flex gap-2">Company Name <span className="text-red-500">*</span></div>
          <input
            {...register("company", { required: "Field can not be empty" })}
            className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
          
          />
          <div className="my-2 text-red-900 font-bold">{errors.company?.message}</div>
        </label>

        <label htmlFor="">
            <div className="flex gap-2 mt-2">Industry <div className="text-red-500">*</div></div>


            <select className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent" name="state" id="states">
                <option value="Select state" >Select</option>
                <option value="Lagos">Construction</option>
                <option value="Abuja">Plumbing</option>
                <option value="Calabar">Electrical</option>
            </select>

        </label>

        <label htmlFor="">
        <div className="flex gap-2 mt-2">Job Role <span className="text-red-500">*</span></div>
          <input
            {...register("role", { required: "Field can not be empty" })}
            className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
          
          />
          <div className="my-2 text-red-900 font-bold">{errors.role?.message}</div>
        </label>


        <label htmlFor="">
            <div className="flex gap-2">Number of Employee <div className="text-red-500">*</div></div>


            <select className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent" name="state" id="states">
                <option value="Select number">Select</option>
                <option value="1">1-10</option>
                <option value="2">11-20</option>
                <option value="3">21-30</option>
            </select>

        </label>

        <label className="relative" htmlFor="">
        <div className="flex gap-2">Password <div className="text-red-500">*</div></div>

          <div>
            <input
              {...register("password", { required: "Field can not be empty" })}
              className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
               placeholder-black"
              type={eye ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />

            <div
              className="icon_button absolute right-4 top-20"
              onClick={() => setEye(!eye)}
            >
              {eye ? (
                <Eye color="#000000" className="h-6 font-extralight" />
              ) : (
                <EyeSlash className="h-6 font-extralight" />
              )}
            </div>
          </div>
          <div className="my-2 text-red-900 font-bold">{errors.password?.message}</div>
        </label>

        <label htmlFor="">
        <div className="flex gap-2">Confirm Password <div className="text-red-500">*</div></div>

          <div className="relative">
            <input
              {...register("confirmPassword", {
                required: "Field can not be empty",
              })}
              className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
              placeholder-black"
              type={eyeTwo ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
           
            />

           <div className="my-2 text-red-900 font-bold">{errors.confirmPassword?.message}</div>


            <div
              className="icon_button absolute right-4 top-5"
              onClick={() => setEyeTwo(!eyeTwo)}
            >
              {eyeTwo ? (
                <Eye color="#000000" className="h-6 font-extralight" />
              ) : (
                <EyeSlash className="h-6 font-extralight" />
              )}
            </div>

            {/* Logic for password validation */}

            {/* <div className="md:w-[60%] bg-[#F64514] p-4 mt-2 text-white rounded ">
              {!isMatch && <div>Passwords do not match</div>}
              {!isLengthValid && (
                <div className="flex gap-2 items-center"> <ArrowCircleRight size="22" color="#ffffff"/>Password must be at least 6 characters long</div>
              )}
              {!hasUppercase && (
                <div className="flex gap-2 items-center"> <ArrowCircleRight size="22" color="#ffffff"/>Password must contain an uppercase letter</div>
              )}
              {!hasLowercase && (
                <div className="flex gap-2 items-center"> <ArrowCircleRight size="22" color="#ffffff"/>Password must contain a lowercase letter</div>
              )}
              {!hasNumber && <div className="flex gap-2 items-center"> <ArrowCircleRight size="22" color="#ffffff"/>Password must contain a number</div>}
              {!hasSpecialCharacter && (
                <div className="flex gap-2 items-center"> <ArrowCircleRight size="22" color="#ffffff"/>Password must contain a special character</div>
              )}
            </div> */}
          </div>
        </label>

        <p className="mt-4 ">By creating an account you are agreeing to DMA Customer <span className="text-[#F64514]">Terms of Service.</span> </p>

        <button type="submit" className="bg-[#F64514]  w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">
          Create Account
        </button>
      </form>

      <div className="flex gap-2 ml-4 mt-4">
        <p> Already a user? </p>

        <Link className="text-[#F64514] font-bold" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
