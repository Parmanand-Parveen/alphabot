import React from 'react'

const Page2 = () => {

 const torchLight = ()=>{
  let torch = document.querySelector(".torch");
  torch.style.left = event.clientX + "px";
  torch.style.top = event.clientY + "px";
 }

  return (
    <div onMouseMove={(e)=>{torchLight(e)}} className=' w-screen mt-[100vh] flex flex-col  items-center relative z-10 bg-black p-11'>
        <div className='torch h-32 w-32 absolute bg-[#ff6a0055] blur-xl rounded-full '>
         
        </div>
         <h3 className='mx-auto text-3xl capitalize font-semibold w-3/4 text-center bg-linear-to-r from-white to-[#ff7b00]
             bg-clip-text
             text-transparent'>

         Alphabots: Proven Trading Excellence <br/> Across India
         </h3>
        <h5 className='text-center text-white text-sm mt-3.5'>
        Alphabots has delivered consistent trading success across multiple states <br /> in India with advanced algorithmic strategies. Join the future of smart <br/> investing with proven algo-trading excellence.
        </h5>
         <div  className='flex flex-col w-[1080px] mt-9 overflow-hidden justify-center items-center'>
            <div className='flex '>
            <div className='w-96 h-48 border border-white/15 '>
                <h1 className='text-white'>0 <span></span></h1>
                <h2 className='text-white'>Strategies</h2>
            </div>
            <div className='w-96 h-48 border border-white/15'>
            <h1 className='text-white'>0 <span></span></h1>
            <h2 className='text-white'>Satisfied Investors</h2>
            </div>
            <div className='w-96 h-48 border border-white/15'></div>
            </div>
            <div className='flex '>
            <div className='w-48 h-48 border-l-0 border-white/15'></div>
            <div className='w-96 h-48 border border-white/15'></div>
            <div className='w-96 h-48 border border-white/15'></div>
            </div>
            <div className='flex '>
            <div className='w-96 h-48 border border-white/15'></div>
            <div className='w-96 h-48 border border-white/15'></div>
            <div className='w-96 h-48 border border-white/15'></div>
            </div>
         </div>

    </div>
  )
}

export default Page2