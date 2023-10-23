import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createNewAccount } from "../../Redux/Slices/auth.slice";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleUserInput(e) {
    
    const { name, value } = e.target;
    
    setData({
      ...data,
      [name]: value,
    });
  }
  async function createAccount(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }
    const obj =  {
        name: data.name,
        email: data.email, 
        password : data.password
    }
    const response = await dispatch(createNewAccount(obj));
    if (response?.payload?.success) {
      toast.success("User created Successfully Now Login");
      navigate("/login");
    }
    setData({
      name: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className=" text-white flex w-full  items-center  justify-around h-[100vh]  gap-3 bg-primary-black ">
      <div className=" extra_small:hidden  xx_small:hidden sm:hidden md:flex w-1/2 flex items-center justify-center">
        <h1>Roll the Carpet !</h1>
      </div>
      <div className=" sm:flex w-1/2 flex justify-center items-center  ">
        <form
          onSubmit={createAccount}
          className="border h-[70vh] flex flex-col justify-center items-center p-6 gap-4 "
        >
          <div className="flex flex-col w-full">
            <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold ">
              SignUp
            </h2>
            <p>Just Some details to get you in ....</p>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="name"> Name </label>
            <input
              
              className="p-2 rounded-md bg-transparent border-b-2 outline-none "
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={handleUserInput}
              value={data.name}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email"> Email</label>
            <input
              className="p-2 rounded-md bg-transparent border-b-2 outline-none "
              name="email"
              type="email"
              id="email"
              placeholder="Enter your Email"
              onChange={handleUserInput}
              value={data.email}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password"> Password</label>
            <input
              className="p-2 rounded-md bg-transparent border-b-2 outline-none "
              name="password"
              type="password"
              id="password"
              placeholder="Enter your Password"
              onChange={handleUserInput}
              value={data.password}
            />
          </div>

          <button
            type="submit"
            className="bg-primary-grey py-2 px-3 rounded-lg  hover:bg-primary-blue transition-all ease-in-out duration-300 "
          >
            Register
          </button>

          <div>
            <p>
              Already have a Account <Link to="/login">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
