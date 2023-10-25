import { useSelector } from "react-redux";
import DisplayUrl from "../Components/DisplayUrl";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SearchInput from "../Components/SearchInput";
import BasicTable from "../Components/Stats";

function HomePage() { 
    const {isLoggedIn} = useSelector(state => state.auth);
    const {allUrls} = useSelector(state => state.url) 
    
    return (
        <div  className= " flex h-screen  md:h-[100vh]   items-center flex-col   gap-3 bg-primary-black ">
            <div className="w-full ">
                <Navbar/>  
            </div>
            <div  className= "mt-20  w-3/4" >
                <Hero/>
            </div> 
            <div  className="w-3/4   lg:w-1/2 ">
                <SearchInput/>
            </div> 
            <div>
                <DisplayUrl/>
            </div> 
            {
                isLoggedIn &&  allUrls && (
                    <div className="w-3/4">
                        <BasicTable/>

                    </div>
                ) 
            }
        </div>
    )
}

export default HomePage;
