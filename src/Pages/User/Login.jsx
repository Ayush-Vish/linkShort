import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { login } from '../../Redux/Slices/auth.slice';
function Login() { 


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
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
  async function loginAccount(e) {
    e.preventDefault();
    if (  !data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }
    const obj =  {
        email: data.email, 
        password : data.password
    }
    const response = await dispatch(login(obj));
    if (response?.payload?.success) { 
        navigate("/");  
    }
    setData({
      email: "",
      password: "",
    });
  }










  return (
    <div className=" text-white flex w-full  items-center  justify-center gap-3 h-[100vh]   bg-primary-black ">
      
      <div className= ' sm:flex  flex justify-center items-center    '>
        <form onSubmit={loginAccount} className="border h-[70vh] flex flex-col justify-center items-center p-6 gap-4 "  >
            <div className='flex flex-col w-full'>
                <h2 className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold '>SignIn</h2> 
                <p>
                    Just Some details to get you in ....
                </p>
            </div> 
           
            <div className='flex flex-col '>
              <label htmlFor="email"> Email</label>
              <input className='p-2 rounded-md bg-transparent border-b-2 outline-none '  type="email" id='email'  name='email' onChange={handleUserInput}  value={data.email}  placeholder='Enter your Email'  />  
            </div>  
            <div className='flex flex-col '>
              <label htmlFor="password"> Password</label>
              <input className='p-2 rounded-md bg-transparent border-b-2 outline-none '  type="text" id='password' name='password' onChange={handleUserInput}  value={data.password}  placeholder='Enter your Password'/>  
            </div> 
            <div>
              <button type="submit" className='bg-primary-grey py-2 px-3 rounded-lg hover:bg-primary-blue transition-all ease-in-out duration-300'>SignIn</button>
            </div>
            <div>
              <p>Dont have a Account ?  <Link to="/signup" > SignUp </Link></p>
            </div>



        </form> 
      </div>
    </div>
  );
}

export default Login;
