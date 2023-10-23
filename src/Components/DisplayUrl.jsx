import { useSelector } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast from "react-hot-toast";


function DisplayUrl ( )  { 
    const {shortUrl , longUrl}= useSelector((state) => state.url );  

    function openLink (e ) {   
        console.log(shortUrl)
        e.preventDefault() ;
        window.open(shortUrl ,'_blank')


    } 
    function copyToClipBoard ( )  {
        const input = document.createElement("input");
        input.value= shortUrl;
        document.body.appendChild(input);
        input.select() ;
        document.execCommand("copy");
        document.body.removeChild(input) ;
        toast.success("URL Copied");

    }
    return (  


        shortUrl&& longUrl && (

            <div className="text-white flex flex-col justify-center items-center  md:flex-row gap-2  bg-primary-grey p-4 ">  
                <h6 className="" >
                    Short Link 
                </h6>
                <button   onClick={openLink} className="font-semibold text-primary-pink   "  >    
                        {shortUrl} 
                </button>
                <button onClick={copyToClipBoard} className="text-green-400">
                    <ContentCopyIcon/>
                </button > 

            </div>
        )
    )
}

export default DisplayUrl;