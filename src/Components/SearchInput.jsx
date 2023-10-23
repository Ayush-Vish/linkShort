import {FiLink} from "react-icons/fi"
import {BsArrowRightCircleFill }  from "react-icons/bs"
import { useState } from "react"
function SearchInput()  {
    const [url  ,setUrl ] = useState ("") 


    function handleUserInput(e) { 
        const  { value } = e.target; 
        setUrl(value);
    } 
    function getShortUrl   ( e)  {
        e.preventDefault();
        
    }
    return ( 
        
        <div className=""  >
            <form onSubmit={getShortUrl} className="text-white flex items-center justify-around p-3  rounded-2xl bg-primary-grey  border-2 border-[#353C4A ] " >
                 
                <label  className="text-white text-2xl" htmlFor="url">
                     < FiLink/>
                </label>
                <input value={url}  onChange={handleUserInput} className=" bg-transparent outline-none  text-xl w-3/4" type="text" name="url" id="url"  placeholder="Enter the Link Here " /> 

                <button className="bg-primary-blue  md:hidden  rounded-full text-white p-3" type="submit"> <BsArrowRightCircleFill/> </button>
                <button className="bg-primary-blue  xx_small:hidden  extra_small:hidden sm:hidden md:flex rounded-full text-white p-3" type="submit"> Shorten Now! </button>

            </form>
        </div>
    )
}

export default SearchInput;