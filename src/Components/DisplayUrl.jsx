import { useSelector } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from "react-hot-toast";
import copyToClipBoard from "../Helpers/copyToClipBoard.helper";


function DisplayUrl ( )  { 
    const {shortUrl , longUrl}= useSelector((state) => state.url );  

    function openLink (e ) {   
        console.log(shortUrl)
        e.preventDefault() ;
        window.open(shortUrl ,'_blank')


    } 
    
    return (  


        shortUrl&& longUrl && (

            <div className="text-white flex flex-col justify-center items-center  md:flex-row gap-2 xx_small:gap-1   p-4 ">  
                <h6 className="" >
                    Short Link 
                </h6>
                <button   onClick={  (e) =>   openLink(e)} className="font-semibold text-primary-pink   "  >    
                        {shortUrl} 
                </button>
                <button onClick={() => copyToClipBoard(shortUrl) }  className="text-green-400">
                    <ContentCopyIcon/>
                </button > 

            </div>
        )
    )
}

export default DisplayUrl;