import { useDispatch, useSelector } from "react-redux";
import DisplayUrl from "../Components/DisplayUrl";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SearchInput from "../Components/SearchInput";
import BasicTable from "../Components/Stats";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { useEffect } from "react";
import { getAllUrls } from "../Redux/Slices/url.slice";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


function HomePage() { 
    const {isLoggedIn} = useSelector(state => state.auth);
    const {allUrls} = useSelector(state => state.url)
    
    const dispatch  = useDispatch() ; 
    async function getData  () { 
        if(isLoggedIn)  { 

            await dispatch(getAllUrls()) 
        }
    }
    useEffect(() => { 
        getData()
    },  [])
    
    return (
        <div  className= " flex min-h-screen   items-center flex-col  relative  gap-3 bg-primary-black ">
            <img  className="  absolute  sm:top-[-100px] xx_small:top-[0px]  sm:right-10 z-0 xx_small:h-[150px]  xx_small:right-2 sm:h-[400px]  " src={img2} alt="" />
            <img  className="  absolute  top-[500px] sm:h-[200px] right-[250px] z-0 xx_small:h-[100px] xx_small:top-[400px]  " src={img2} alt="" />
            <img  className="   absolute md:top-28  sm:top-[300px] sm:h-[400px]  xx_small:top-[100px] xx_small:h-[200px]  xx_small:left-7  sm:left-[150px] z-0   " src={img3} alt="" />
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
                !isLoggedIn  ? (
                    
                    <div className="  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-['Roboto'] tracking-wide  break    w-2/4 h-[100px] z-10 flex items-center justify-center text-3xl font-bold text-center" >
                        <h1>  <Link to="/login" >Login </Link> to See Your Urls</h1>
                    </div>
                ) : (
                    allUrls  ? (
                        <div className="w-3/4 z-10">
                            <BasicTable/>

                        </div>
                    ) : (
                        <div className="  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-['Roboto'] tracking-wide  break    w-2/4 h-[100px] z-10 flex items-center justify-center text-3xl font-bold text-center" >
                            <h1>Shorten a Url to See History</h1>
                        </div>
                    )
                )
            }

            <div className="w-full z-10  static   bg-primary-grey">
                <Footer/>
            </div>    
        </div>
    )
}

export default HomePage;
