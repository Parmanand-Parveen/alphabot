"use client"
import React, { useState } from 'react';
import { motion } from "motion/react";
import GSAPScollingBanner from './GSAPScollingBanner';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Page3 = () => {
 
  const [crousle, setcrousle] = useState([{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  },{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  },{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  },{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  },{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  },{
    bankName:"HDFC",
    amount: "100 USD",
    percentage: "1200%",
  }])


  return (
    <div className=' w-screen z-10 bg-black'>
     <GSAPScollingBanner text={"Alphabots ✦ Best AI-powered trading solutions ✦"}/>
     <div className='flex w-[1080px] mx-auto mb-8'>
     <video className='h-72 w-1/2 mix-blend-screen object-cover' src="./assets/videos-webm/alpha-logo.webm" autoPlay loop muted></video>
      <div className='w-1/2 pt-6 flex flex-col gap-4'>
           <p className='text-[#D56600] rounded-full border-[#864000] text-xs font-serif border w-max px-3 py-1'>Step Into the Future of AI Trading</p>
           <h2 className='bg-linear-to-r from-white to-[#ff7b00]
             bg-clip-text
             text-transparent text-4xl'>Still Trading Manually?</h2>
                        <h4 className='text-white leading-5'>
                            Still trading manually? You’re already behind. AI-driven <br /> algorithms execute trades faster,
                            smarter, and with zero emotions <br /> —maximizing profits while minimizing risk. The future of
                            trading <br /> is here, and it's fully automated!
                        </h4>
                        <h5 className='text-[#8E8C8A]'>
                            Don’t get left behind—embrace the power of algo trading today! Sign up now and take the
                            first step toward smarter, data-driven investing. The future of trading is here—click Sign
                            Up and start your journey to success!
                        </h5>
      </div> 
     </div>
       <InfiniteMovingCards items={crousle} speed="fast"/>
       <InfiniteMovingCards items={crousle} speed="fast" direction='right'/>
    </div>
  );
};

export default Page3;