"use client";
import React, { useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landingpage = () => {
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
          start: "top 80%",   // Adjust to control when animation starts
          end: "top 40%",     // Adjust to control when animation ends
          scrub: true,
          // markers: true,
        }},
      )
  }, []);

  return (
    <div className="w-screen flex flex-col items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center mt-16 px-6 text-center">
        <p className="flex items-center text-lg md:text-xl">
          Automating trades, ensuring
          <span className="px-2 py-1 ml-1 rounded flex items-center bg-gray-200 dark:bg-gray-700">
            <GoDotFill className="mr-1 text-green-600 drop-shadow-md" />
            Success
          </span>
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
          Supercharge your investments with a new-age <br /> algo trading platform
        </h1>
        <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
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
          src="/assets/Logo/alphabotslogo.png"
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
        className="w-[80%] z-10 absolute top-[40%]"
        src="https://images.prismic.io/3commas/Z4hpFJbqstJ99gzI_create-dca.png?auto=format%2Ccompress&fit=max&w=2560&q=75"
        alt="DCA Strategy"
      />
    </div>
  );
};

export default Landingpage;
