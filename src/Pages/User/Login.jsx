import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
function Login() {
  return (
    <div className=" text-white flex w-full  items-center  justify-around h-[100vh]  gap-3 bg-primary-black ">
      <div>
        <h1>
            Roll the Carpet !
        </h1>
        <div>

        </div>
      </div>
      <div>
        <form className="" >
            <div>
                <h2>SignUp</h2> 
                <p>
                    Just Some details to get you in ....
                </p>
            </div> 
            <label htmlFor="name"> Name</label>
            <input type="text" id='name'   placeholder='Enter your name'/>
        </form> 
      </div>
    </div>
  );
}

export default Login;
