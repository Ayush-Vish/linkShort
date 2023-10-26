import toast from "react-hot-toast";

function copyToClipBoard ( text )  { 
    
    const input = document.createElement("input");
    input.value= text;
    document.body.appendChild(input);
    input.select() ;
    document.execCommand("copy");
    document.body.removeChild(input) ;
    toast.success("URL Copied");

} 


export default copyToClipBoard;
