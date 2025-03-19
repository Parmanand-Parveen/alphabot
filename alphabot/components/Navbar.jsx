"use client"

import Image from 'next/image'
import React from 'react'
import { FloatingNav } from './ui/floating-navbar'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { Button } from './ui/button'

const Navbar = () => {

    let navItems = [    
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Products",link:"/products"},
        {name:"Blogs",link:"/blogs"},
        {name:"Contact",link:"/contact"},
    ]

  return (
    <div className='flex justify-between items-center '>
      <Image src={"/assets/Logo/alphabotslogo.png"} alt='logo' height={50} width={110} /> 
       <div className='flex gap-4 bg-[rgba(255,255,255,.1)] px-4 py-2'>
       {navItems.map((item,i)=>{
        return  <ul className='rounded py-1 hover:bg-[rgba(255,255,255,.2)] text-white' key={i}>
                <Link className='px-2 py-2' href={item.link}>{item.name}</Link>
            </ul>
          })}           
       </div>
         
      <div className='flex gap-4 mr-2'>
        <Button className="text-black px-3 rounded py-2 bg-white">Sign up <span className='h-5 w-5 flex justify-center items-center  bg-orange-400 rounded text-white text-sm'><FaArrowRight className='h-1 w-1'/></span>  </Button>
        <Button className="px-3 border bg-transparent text-white  rounded py-2 border-white">Login</Button>
   

      </div>

 

    </div>
  )
}

export default Navbar