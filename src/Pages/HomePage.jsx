import { useSelector } from "react-redux";
import DisplayUrl from "../Components/DisplayUrl";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SearchInput from "../Components/SearchInput";
import BasicTable from "../Components/Stats";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function HomePage() { 
    const {isLoggedIn} = useSelector(state => state.auth);
    const {allUrls} = useSelector(state => state.url) 
    
    return (
        <div  className= " flex min-h-screen max-h-full  items-center flex-col  relative  gap-3 bg-primary-black ">
            <img  className="  absolute  sm:top-[-100px] xx_small:top-[0px]  sm:right-10 z-0 xx_small:h-[150px]  xx_small:right-2 sm:h-[400px]  " src={img2} alt="" />
            <img  className="  absolute  top-[500px] sm:h-[200px] right-[250px] z-0 xx_small:h-[100px] xx_small:top-[400px]  " src={img2} alt="" />
            <img  className="  absolute  sm:top-[300px] sm:h-[400px]  xx_small:top-[100px] xx_small:h-[200px]  xx_small:left-7  sm:left-[150px] z-0   " src={img3} alt="" />
            <div className="w-full z-30 ">
                <Navbar/>  
            </div>
            <div  className= "mt-20 z-10  w-3/4" >
                <Hero/>
            </div> 
            <div  className="w-3/4 z-10   lg:w-1/2 ">
                <SearchInput/>
            </div> 
            <div  className="z-10">
                <DisplayUrl/> 
            </div> 
            
            {
                isLoggedIn &&  allUrls && (
                    <div className="w-3/4 z-10">
                        <BasicTable/>

                    </div>
                ) 
            }
        </div>
    )
}

export default HomePage;
