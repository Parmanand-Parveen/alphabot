import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GSAPScollingBanner = ({text}) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    gsap.to(banner, {
      xPercent: -100, // Move the banner fully to the left
      ease: "none",     // Linear easing for constant speed
      scrollTrigger: {
        trigger: banner,  // Trigger the animation when the banner is in view
        start: "top 80%",   // Start animation when the top of the banner hits the top of the viewport
        end: "-150px -500px", // End animation when we've scrolled the width of content
        scrub: true,
        invalidateOnRefresh: true, // re-calculates values when the page is resized
        markers: false,        // For debugging
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="text-[10rem]  font-serif flex text-white whitespace-nowrap relative z-50 "  //overflow hidden to prevent the banner content from overflowing
    >
     
     <h3 className='bg-linear-to-r from-white to-[#ff7b00] bg-clip-text
             text-transparent'>{text}</h3>
     <h3 className='bg-linear-to-r from-white to-[#ff7b00]
             bg-clip-text
             text-transparent'>{text}</h3>

    </div>
  );
};

export default GSAPScollingBanner;