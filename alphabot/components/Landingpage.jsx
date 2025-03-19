"use client"
import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { FaArrowRight } from 'react-icons/fa'
import { GoDotFill } from "react-icons/go";
 
const Landingpage = () => {


  return (
    <div className='h-screen w-screen  bg-[url("/assets/images/OrangeLightsTransparentBG.png")] py-0.5 -z-10 px-4 fixed top-0 bg-black '>
       <Navbar/>
        <div className="h-full w-full ">
          <div className="upper w-full justify-center flex">
           <img  className='h-72 opacity-15' src="./assets/images/grid-box.png" alt="" />
           <video className='h-72 mix-blend-screen' src="./assets/videos-webm/Grid-Lines.webm" autoPlay loop muted ></video>
           <img className='h-72 opacity-15' src="./assets/images/grid-box.png" alt="" />
          </div>
          <div className="lower  w-full justify-between flex">
            <video className='h-72 mix-blend-screen' src="./assets/videos-webm/left-stocks2.webm" autoPlay loop muted ></video>
            <video className='h-72 mix-blend-screen' src="./assets/videos-webm/right-stocks2.webm" autoPlay loop muted ></video>
          </div>
        </div>
        
        <div className='h-screen w-screen flex justify-center items-center absolute top-0  z-30 '>
            <div className='flex flex-col relative justify-center items-center gap-3 text-xs text-white'>
            <div className={`blob animate-blob  h-40 w-40 rounded-full bg-[#ffa6003a] absolute -z-[5] blur-xl`}></div>

            <p className='flex items-center gap-2'>Automating trades, ensuring <span className='flex px-2 gap-1 text-sm items-center bg-[rgba(255,255,255,.2)]'><span><GoDotFill className='text-orange-400 '/> </span> Success </span></p>
             <h1 className='text-4xl capitalize font-semibold w-3/4 text-center bg-linear-to-r from-white via-white to-[#ff7a00]
             bg-clip-text
             text-transparent'>
                        Supercharge your investments with a new-age algo trading platform
             </h1>
             <p className='text-center text-xs'>Sign up now and take the first step toward investing today.</p>
               <div className='flex gap-4 mr-2'>
                       <Button className="text-black px-3 rounded py-2 bg-white">Sign up <span className='h-5 w-5 flex justify-center items-center  bg-orange-400 rounded text-white text-sm'><FaArrowRight className='h-1 w-1'/></span>  </Button>
                       <Button className="px-3 border bg-transparent text-white  rounded py-2 border-white">Login</Button>
                     </div>
        </div>
        </div>
        
    </div>
     
    
  )
}

export default Landingpage