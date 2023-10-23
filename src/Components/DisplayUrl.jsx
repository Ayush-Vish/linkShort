import { useSelector } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from "react-router-dom";


function DisplayUrl ( )  { 
    const {shortUrl , longUrl}= useSelector((state) => state.url ); 
    return (  


        shortUrl&& longUrl && (

            <div className="text-white flex flex-col justify-center items-center  md:flex-row gap-2  bg-primary-grey p-4 ">  
                <h6 className="" >
                    Short Link 
                </h6>
                <button disabled className="font-semibold text-primary-pink   "  >    
                    <Link> 
                        {shortUrl}
                    </Link>npm 
                </button>
                <button className="text-green-400">
                    <ContentCopyIcon/>
                </button > 

            </div>
        )
    )
}

export default DisplayUrl;