import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight } from 'react-icons/fa'
import { GlowingEffect } from './ui/glowing-effect'

const Page4 = () => {
  return (
     <div className='z-10 bg-black text-white flex justify-between py-6 items-center '>
         <div className="page4left pl-8">
            <h1 className='bg-linear-to-r from-white to-[#ff7b00]
             bg-clip-text
             text-transparent text-4xl' >Master Trading Today— <br />
            Your Powerful Dashboard at <br/> Your Fingertips!</h1>
                  <div className='flex gap-4 mt-2'>
                                      <Button className="text-black px-3 rounded py-2 bg-white">Sign up <span className='h-5 w-5 flex justify-center items-center  bg-orange-400 rounded text-white text-sm'><FaArrowRight className='h-1 w-1'/></span>  </Button>
                                      <Button className="px-3 border bg-transparent text-white  rounded py-2 border-white">Login</Button>
                                    </div>
         </div>
          
       
         <video className='h-[600px]  mix-blend-screen' src="./assets/videos-webm/dashboard.webm" autoPlay loop muted ></video>
        
 


    </div>
  )
}

export default Page4