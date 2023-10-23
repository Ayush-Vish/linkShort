import DisplayUrl from "../Components/DisplayUrl";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SearchInput from "../Components/SearchInput";

function HomePage() {
    return (
        <div  className= " flex w-full  items-center flex-col h-[100vh]  gap-3 bg-primary-black ">
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
        </div>
    )
}

export default HomePage;
