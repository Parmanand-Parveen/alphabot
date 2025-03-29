"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const ChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !cardsContainer || typeof window === "undefined") return;

    const cards = gsap.utils.toArray(cardsContainer.querySelectorAll(".card"));

    if (cards.length === 0) {
      console.warn("GSAP: Cards not found.");
      return;
    }

    cards.forEach((card, index) => {
      gsap.set(card, {
        zIndex: cards.length - index,
        transformOrigin: "bottom center",
        rotation: index * -6,
        y: index * 10,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${(cards.length - 1) * 400}`,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    cards.slice(0, -1).forEach((card, index) => {
      const nextCard = cards[index + 1];
      const stepStart = index * 0.8;

      tl.to(
        card,
        {
          yPercent: -120,
          rotation: -25,
          duration: 0.6,
          ease: "power1.in",
        },
        stepStart
      );

      if (nextCard) {
        tl.to(
          nextCard,
          {
            rotation: 0,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
          },
          stepStart + 0.1
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.trigger === section && st.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="h-auto lg:h-screen w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-8 bg-white dark:bg-[#0A0A0A]">
        <div className="w-full max-w-[420px] text-[clamp(36px,8vw,84px)] font-bold leading-tight text-gray-900 dark:text-white">
          Our programs
        </div>
        <div className="w-full max-w-[420px] text-sm lg:text-base mt-6 lg:mt-8 text-gray-700 dark:text-gray-300">
          Explore algo trading opportunities once exclusive to the wealthiest!
          <br />
          <button className="mt-5 px-6 py-3 bg-black text-white rounded-lg border-none outline-none cursor-pointer text-sm hover:bg-gray-800 transition-colors">
            See More Details
          </button>
        </div>
      </div>

      {/* Right Section - Card Container */}
      <div ref={cardsContainerRef} className="h-auto lg:h-screen w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center relative lg:sticky top-0">
        {/* Cards */}
        {[
          { title: "SIP", desc: "Automate investments for seamless growth, smart strategies, and maximum tax savings!", bg: "bg-blue-500" },
          { title: "Private Clusters", desc: "Elite investment solution for HNI investors using quantitative algorithms for optimized performance.", bg: "bg-red-500" },
          { title: "Signals & Bridges", desc: "Automated, data-driven strategies for low-risk swing and high-reward intraday trading.", bg: "bg-purple-500" },
        ].map((card, index) => (
          <div
            key={index}
            className={`card absolute w-[90%] sm:w-[320px] md:w-[350px] h-[360px] md:h-[450px] rounded-[25px] flex flex-col justify-between p-6 md:p-9 text-white shadow-xl ${card.bg}`}
          >
            <div className="text-base md:text-lg font-bold">{card.title}</div>
            <div className="text-lg md:text-sm font-bold leading-tight">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
