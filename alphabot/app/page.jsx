"use client"
import React from 'react'
import {motion, useScroll} from "motion/react"
import Landingpage from '@/components/Page1/Landingpage';
import Page2 from '@/components/Page2';
import StatsSection from '@/components/Page1/Section2';
import StepsSection from '@/components/Page1/StepsSection';
import DCASetup from '@/components/Page1/DcaSection';
import ChooseUs from '@/components/Page1/ChooseUs';
import OurTeam from '@/components/Page1/Team';
import { AnimatedTestimonialsDemo } from '@/components/Page1/Review';
import FAQSection from '@/components/Page1/Faq';
import Footer from '@/components/Page1/Footer';


const Home = () => {
const {scrollYProgress} = useScroll();

  return (
    <div className=' overflow-x-hidden font-serif'>
       <Landingpage/>
       <StatsSection/>
       <StepsSection/>
       <DCASetup/>
       <ChooseUs/>
       <OurTeam/>
       <AnimatedTestimonialsDemo/>
       <FAQSection/>
       <Footer/>
    
    </div>
  )                                                                                                                                 
}

export default Home