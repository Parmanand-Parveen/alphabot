"use client";
import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Landingpage2 = () => {
  const logoRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const desktopRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftImgRef.current,
      { x: -100, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: leftImgRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      rightImgRef.current,
      { x: 100, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: rightImgRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
        desktopRef.current, 
      {  yPercent: 50,
        opacity: 1,},
       { opacity:0,
        yPercent:100, 
        scrollTrigger: {
          trigger: desktopRef.current,
          start: "70 60%",   
          end: "top 30%",     
          scrub: true,
        }},
      )
  }, []);

  return (
    <div className="w-screen flex flex-col items-center relative bg-[#EAF5F5] dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center  px-6 text-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold mt-4 leading-tight">
        Automate your crypto <br /> trading strategies
        </h1>
        <Button className="mt-6 cursor-pointer px-8 py-6 hover:bg-[#13A8A1] bg-[#13A8A1] text-lg">Start Free Trial</Button>
        <p className="text-[10px] mt-0.5 font-sans uppercase ">No Credit card Required</p>
        <h1 className="flex text-muted-foreground text-base mt-4"><Play/>Watch Video</h1>
        <div className="flex gap-8 mt-4 text-xs">
            <div>
               <div className="flex">
               <img src="/person.svg" alt=""  className="w-4 h-4"/> 
               <p>1.8M</p>
               </div>
               <p className="text-[8px] text-muted-foreground">TRADERS REGISTERED</p>
            </div>
            <div>
                <div className="flex items-center">
                  <p className="text-[10px] text-muted-foreground">Rated <span className="text-black">Excellent</span> on</p>
                  <img className=" h-4" src="https://images.prismic.io/3commas/Z416PpbqstJ99nZy_Frame.png?auto=format%2Ccompress&fit=max&w=360" alt="" />
                </div>
              <p className="text-[10px] text-muted-foreground text-left">1,479 Reviews</p>
            </div>
            <div className="flex gap-1">
                 <img className="h-6" src="https://images.prismic.io/3commas/Z412NZbqstJ99nZc_google-logo.png?auto=format%2Ccompress&fit=max&w=256" alt="" />
                 <div>
                    <p className="text-left text-[8px] text-muted-foreground">Google Reviews</p>
                    <div className="flex items-center">
                        <p>4.0</p>
                        <img className="h-3" src="https://images.prismic.io/3commas/Z411N5bqstJ99nY__four-star.png?auto=format%2Ccompress&fit=max&w=128" alt="" />
                    </div>
                 </div>

            </div>

        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6 mt-12 px-4">
        <img
          ref={leftImgRef}
          className="w-1/3 max-w-xs md:max-w-md"
          src="https://images.prismic.io/3commas/Z4ho3ZbqstJ99gzC_left-coins-block.png?auto=format%2Ccompress&fit=max&w=768"
          alt="Left Coins"
        />
        <img
          ref={logoRef}
          className="w-1/3 max-w-[120px] md:max-w-[200px] transition-transform"
        //   src="/assets/Logo/alphabotslogo.png"
        src="https://images.prismic.io/3commas/Z4jkSJbqstJ99hih_commasLogo.png?auto=format%2Ccompress&fit=max&w=500"
          alt="Alphabots Logo"
        />
        <img
          ref={rightImgRef}
          className="w-1/3 max-w-xs md:max-w-md"
          src="https://images.prismic.io/3commas/Z4hpApbqstJ99gzH_right-coins-block.png?auto=format%2Ccompress&fit=max&w=768&q=75"
          alt="Right Coins"
        />
      </div>

      {/* Bottom Image */}
      <img
        ref={desktopRef}
        className="w-[80%] z-10 absolute mt-10 md:mt-24"
        src="https://images.prismic.io/3commas/Z4hpFJbqstJ99gzI_create-dca.png?auto=format%2Ccompress&fit=max&w=2560&q=75"
        alt="DCA Strategy"
      />
    </div>
  );
};

export default Landingpage2;
