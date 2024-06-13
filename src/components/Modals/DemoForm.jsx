import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


// import Arrow from "../../public/images/Arrow.png"

const Signup = () => {
//   const [eye, setEye] = useState(false);
//   const [eyeTwo, setEyeTwo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  
  const url =  'https://dma.bloggrammer.com/api/signup';

  const submitUserData = async (data) => {

    const  response = await fetch (url, {

    method: 'POST',

    headers: {'Content-Type': 'application/json',   "accept": "*/*"},

    body: JSON.stringify(data)
    })

    console.log("res:", response);
    console.log(data);
  }

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <div className=" mt-10 mb-8 lg:p-10 shadow-lg rounded-lg md:w-[50%] lg:w-[40%]  md:ml-auto md:mr-auto ">

      {/* <img src={Arrow} alt="" /> */}
     

      <div className="text-3xl lg:text-4xl pb-10 text-center text-orange-500 font-bold">Get a Free Demo of DMA Platform</div>

      <form
        onSubmit={handleSubmit(submitUserData)}
        className="ml-4 mr-4 mt-4"
        action=""
      >

        <div className="grid gap-10 grid-cols-2">
            <label htmlFor="">
                <div className="flex gap-2">First name <div className="text-red-500">*</div></div>
            <input
                {...register("first", { required: "Field can not be empty" })}
                className="p-3 my-2  w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                type="text"
            />

            <div>{errors.first?.message}</div>
            </label>

            <label htmlFor="">
            <div className="flex gap-2">Last name <div className="text-red-500">*</div></div>
            <input
                {...register("last", { required: "Field can not be empty" })}
                className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
                placeholder-black"
                type="text"
            />
            <div>{errors.last?.message}</div>
            </label>
        </div>
      

        <label htmlFor="">
        <div className="flex gap-2">Email<div className="text-red-500">*</div></div>
          <input
            {...register("email", { required: "Field can not be empty" })}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="email"
        
          />
          <div>{errors.email?.message}</div>
        </label>

        <label htmlFor="">
        <div className="flex gap-2">Phone Number <div className="text-red-500">*</div></div>
          <input
            {...register("phone", { required: "Field can not be empty" })}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
            
          />
          <div>{errors.phone?.message}</div>
        </label>

        <label htmlFor="">
        <div className="flex gap-2">Company Name <div className="text-red-500">*</div></div>
          <input
            {...register("role", { required: "Field can not be empty" })}
            className="p-3 my-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
          />
          <div>{errors.role?.message}</div>
        </label>



        <label htmlFor="">
            <div className="flex gap-2">State <div className="text-red-500">*</div></div>


            <select className="p-3 mt-2 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent" name="state" id="states">
                <option value="Select state">Select state</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Calabar">Calabar</option>
            </select>

        </label>


        <label htmlFor="">
        <div className="flex gap-2 mt-4">Number of Employee <div className="text-red-500">*</div></div>
          <input
            {...register("role", { required: "Field can not be empty" })}
            className="p-3 my-4 w-[100%] ring-1 ring-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F64514] focus:border-transparent
            placeholder-black"
            type="text"
          />
          <div>{errors.role?.message}</div>
        </label>

    
    </form>

      <div className="pt-10 px-8">
      We're committed to your privacy. We use the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <span className="text-[#F66C4E]">Privacy Policy.</span>
      </div>

      <Link to="/demo">

        <div className="px-10 pb-10">

        <button type="submit" className="bg-orange-500 hover:bg-[#F64514] w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">
            Get your free demo
        </button>

        </div>

        
      

      </Link>

      {/* <button type="submit" className="bg-[#F64514] w-[100%] text-white font-bold p-4 mt-8 rounded-lg outline-none">
        Get your free demo
        </button> */}

   
    </div>
  );
};

export default Signup;
