function Hero ( )  {
    return (
        <div className="flex  justify-center items-center flex-col "  >

            <div    className= " bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-['Inter'] tracking-wide  break   text-4xl  flex flex-col lg:flex-row md:flex-row justify-center  items-center text-center  text-[#fff] md:text-7xl"  >
                Shorten your loooong Links  :)
            </div> 
            
            <div className=" w-3/4 m-3 ">
                <p className=" text-center text-white text-base  " >
                    Linkly is an efficient and easy to use Url shortening Service that streamlines your online experiences.
                </p>
            </div>
        </div>
    )
}

export default Hero;
