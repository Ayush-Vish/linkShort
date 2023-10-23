import DisplayUrl from "../Components/DisplayUrl";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SearchInput from "../Components/SearchInput";
import BasicTable from "../Components/Stats";

function HomePage() {
    return (
        <div  className= " flex w-full  md:h-[100vh]   items-center flex-col   gap-3 bg-primary-black ">
            <div className="w-full ">
                <Navbar/>  
            </div>
            <div  className= "mt-20  w-3/4" >
                <Hero/>
            </div> 
            <div  className="w-3/4">
                <SearchInput/>
            </div> 
            <div>
                <DisplayUrl/>
            </div> 
            <div className="w-3/4">
                <BasicTable/>

            </div>
        </div>
    )
}

export default HomePage;
