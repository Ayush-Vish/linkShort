import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer ( ) {
     



    return (
       <div className="text-white p-8 flex justify-around items-center  " >
            <div >
                <h2>Developed by  <a href="https://www.linkedin.com/in/ayush-vishwakarma1/" className="text-primary-pink cursor-pointer">  Ayush Vishwakarma </a>   </h2>
            </div>

            
                <div className="flex items-center gap-3 "  > 
                    <a href="https://www.instagram.com/auush.sh/">
                        <BsInstagram/>
                    </a>
                    <a href="https://twitter.com/AYUSHVI02076789">
                        <BsTwitter/>
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-vishwakarma1/">
                        <BsLinkedin/>
                    </a>

                    <a href="https://github.com/Ayush-Vish/">
                        <BsGithub/>
                    </a>
                </div>


            
       </div>
    )
}



export default Footer;