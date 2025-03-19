"use client"
import React from 'react'
import Landingpage from '@/components/Landingpage'
import {motion, useScroll} from "motion/react"
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import GSAPScollingBanner from '@/components/GSAPScollingBanner'
import Page4 from '@/components/Page4'

const Home = () => {
const {scrollYProgress} = useScroll();

  return (
    <div className=' overflow-x-hidden font-serif'>
      <motion.div style={{ scaleX: scrollYProgress , originX: 0}} className='fixed z-50 top-0 left-0 w-full h-0.5 bg-amber-400'></motion.div>
      <Landingpage />
      <Page2/>
      <Page3/>
      <Page4/>
    </div>
  )
}

export default Home