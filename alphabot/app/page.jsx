"use client"
import React from 'react'
import {motion, useScroll} from "motion/react"
import Landingpage from '@/components/Page1/Landingpage';
import StatsSection from '@/components/Page1/Section2';
import StepsSection from '@/components/Page1/StepsSection';
import DCASetup from '@/components/Page1/DcaSection';
import ChooseUs from '@/components/Page1/ChooseUs';
import OurTeam from '@/components/Page1/Team';
import { AnimatedTestimonialsDemo } from '@/components/Page1/Review';
import FAQSection from '@/components/Page1/Faq';
import Footer from '@/components/Page1/Footer';
import Landingpage2 from '@/components/Page1/LandingPage2';
import DcaSection2 from '@/components/Page1/DcaSection2';
import { TimelineDemo } from '@/components/Page1/TimeLine';
import Footer2 from '@/components/Page1/Footer2';
import ChooseUs2 from '@/components/Page1/ChooseUs2';


const Home = () => {
const {scrollYProgress} = useScroll();

  return (
    <div className=' overflow-x-hidden dark:bg-gray-900 font-serif'>
       <Landingpage2/>
       <StatsSection/>
       <TimelineDemo/>
       <StepsSection/>
       <DcaSection2/>
       <ChooseUs2/>
       <OurTeam/>
       <AnimatedTestimonialsDemo/>
       <FAQSection/>
       <Footer/>
    
    </div>
  )                                                                                                                                 
}

export default Home