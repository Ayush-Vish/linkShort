import {FiLink} from "react-icons/fi"
import {BsArrowRightCircleFill }  from "react-icons/bs"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getAllUrls, getShort } from "../Redux/Slices/url.slice";
import { ThreeDots } from "react-loader-spinner";
function SearchInput()  { 
    const data= useSelector(state => state.url ) 

    const [url  ,setUrl ] = useState ("") 
    const dispatch= useDispatch()
    const [loader, showLoader]  = useState(false);

    function handleUserInput(e) { 
        const  { value } = e.target;  
        
        setUrl(value);
    } 
    async function getShortUrl   ( e)  { 
        e.preventDefault() 
        if(!url)  {
            toast.error("Please give a Url");
            return ;
        }
        const obj ={
            "longUrl":url
        }
        const response = await  dispatch(getShort(obj   ));
        if(response?.payload?.success) { 
            toast.success("Url Created SuccessFully ") 
            await dispatch(getAllUrls());
            
        }
        

        
    } 

    return ( 
        <div className=""  >
            <form onSubmit={(e) => getShortUrl(e)} className="text-white flex items-center justify-around p-3  rounded-2xl bg-primary-grey  border-2 border-[#353C4A ] " >
                 
                <label  className="text-white text-2xl" htmlFor="url">
                     < FiLink/>
                </label>
                
                <input value={url}  onChange={handleUserInput} className=" bg-transparent outline-none line-clamp-1  text-xl w-3/4" type="text" name="url" id="url"  placeholder="Enter the Link Here " /> 
                
                {loader===true  ? (

                    <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#4fa94d" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        />
                ):(

                <div>
                    <button className="bg-primary-blue hover:bg-blue-800  transition-all ease-in-out duration-300  md:hidden  rounded-full text-white p-3" type="submit"> <BsArrowRightCircleFill/> </button>
                    <button className="bg-primary-blue hover:bg-blue-800 transition-all ease-in-out duration-300  xx_small:hidden  extra_small:hidden sm:hidden md:flex rounded-full text-white p-3" type="submit"> Shorten Now! </button>
                </div>
                )}

            </form>
        </div>
    )
}

export default SearchInput;