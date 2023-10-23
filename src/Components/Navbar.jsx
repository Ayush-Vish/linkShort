

import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";



function Navbar () { 
    const {isLoggedIn , data} = useSelector(state => state?.auth)
    const dispatch = useDispatch() 
    
    return ( 
        <div  className="flex justify-between p-4  items-center  text-[#ffffff] "  >
            <div className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-semibold from-pink-500 to-violet-500 ">LinkShort</div>
            {isLoggedIn ? ( 
                <div>

                <button  className=" xx_small:hidden flex-col extra_small:hidden sm:hidden md:block xx_small:text-xl  p-1 flex justify-center text-[#ffffff]  items-center bg-primary-grey border rounded-2xl px-3 hover:bg-primary-blue hover:shadow-[10px_9px_22px_0px_rgba(20,78,227,0.38)]  transition-all ease-in-out duration-300  ">
                    Welcome <span>{data.name}</span>
                </button>
                <button  className="  flex-col md:hidden  border-primary-grey   p-1  flex justify-center text-[#ffffff]  items-center bg-primary-grey border rounded-lg px-2 hover:bg-primary-blue hover:shadow-[10px_9px_22px_0px_rgba(20,78,227,0.38)]  transition-all ease-in-out duration-300  ">
                      <span>{data.name.split(" ")[0]}</span>
                 </button>
                </div>
            ):(
                
            <div className="flex items-center justify-center gap-3 ">
                <Link to="/login" >
                    <button className="p-2 flex justify-center text-[#ffffff]  items-center bg-primary-grey border rounded-2xl px-3 hover:bg-primary-blue hover:shadow-[10px_9px_22px_0px_rgba(20,78,227,0.38)]  transition-all ease-in-out duration-300  ">
                        Login   
                    </button>
                </Link> 
                <Link to="/register">
                    <button className=" p-2  justify-center text-[#ffffff]  items-center bg-primary-grey border rounded-2xl px-3 hover:bg-primary-blue hover:shadow-[10px_9px_22px_0px_rgba(20,78,227,0.38)]  transition-all ease-in-out duration-300   hidden md:block ">
                        Register Now
                    </button>
                </Link>
            </div>
            )}
        </div>
    )


}


export default Navbar;