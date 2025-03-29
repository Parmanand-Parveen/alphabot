"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";

// const steps = [
//   {
//     title: "Get Started",
//     description: "Click the Sign Up button to begin your journey.",
//     buttonText: "Sign up to Connect",
//     image: "/assets/images/banners/1.png",
//     bgLight: "from-green-400 to-green-600",
//     bgDark: "from-green-500 to-green-700",
//   },
//   {
//     title: "Enter Your Details",
//     description:
//       "Complete your details on the easy-to-follow form—it's quick and simple!",
//     image: "/assets/images/banners/2.png",
//     bgLight: "from-blue-400 to-blue-600",
//     bgDark: "from-blue-500 to-blue-700",
//   },
//   {
//     title: "You’re All Set",
//     description:
//       "You're all set! Our team will reach out to guide you through the next steps.",
//     image: "/assets/images/banners/3.png",
//     bgLight: "from-yellow-400 to-yellow-600",
//     bgDark: "from-yellow-500 to-yellow-700",
//   },
// ];

const StepsSection = () => {
  // Data for the steps - makes it easier to manage if steps change
  const steps = [
    {
      id: 1,
      title: "Link your exchange account",
      description: "Connect one or several exchange accounts to 3Commas",
      buttonText: "Sign up to Connect",
      buttonLink: "https://app.3commas.io/auth/registration",
      buttonIcon: "https://3commas.cdn.prismic.io/3commas/Z6EvXpbqstJ9-MAH_Link.svg",
      imageSrc: "https://images.prismic.io/3commas/Z6ZnUJbqstJ9-YVi_link-your-exchange-account.png?auto=format%2Ccompress&fit=max&w=1920",
      imageAlt: "Link your exchange account image",
    },
    {
      id: 2,
      title: "Set up a Bot",
      description: "Select the right bot, depending on your trading goals, and deploy it. You may set up multiple automated trading bots within the same account.",
      imageSrc: "https://images.prismic.io/3commas/Z6ZnUZbqstJ9-YVk_set-up-a-bot.png?auto=format%2Ccompress&fit=max&w=1920",
      imageAlt: "Set up a Bot image",
    },
    {
      id: 3,
      title: "Let your Bots work hard for your success",
      description: "Enjoy your life while the bots do the hard work of building your portfolio",
      imageSrc: "https://images.prismic.io/3commas/Z6ZnUJbqstJ9-YVh_let-your-bots-work-hard.png?auto=format%2Ccompress&fit=max&w=1920",
      imageAlt: "Let your Bots work hard for your success image",
    },
  ];

  return (
    <section className=" mx-auto mt-10 max-w-6xl">
      <header className="flex flex-col gap-2 text-center mb-8 lg:mb-16 lg:gap-3">
        <h2
          id="get-started-in-3-easy-steps"
          className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
        >
          Get started in 3 easy steps
        </h2>
      </header>
      <ul className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-7xl mx-auto px-4">
        {steps.map((step) => (
          <li
            key={step.id}
           
            className="flex flex-col justify-between rounded-2xl gap-5 overflow-hidden w-full md:w-[calc(50%-theme(spacing.3))] lg:w-[calc(33.333%-theme(spacing.4))] bg-gradient-to-b from-[#EAF5ED] to-[#EAF5F5] dark:from-[#F4A460] dark:to-[#8B4513]"
          >
            {/* Text Content Area */}
            <div className="flex flex-col gap-2 pt-8 px-6 md:pt-10 md:px-8"> 
              <div className="flex items-center gap-2">
                <h3
             
                  className="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  {step.id}. {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-normal">
                {step.description}
              </p>
              {/* Conditional Button for Step 1 */}
              {step.buttonText && step.buttonLink && step.buttonIcon && (
                <a
                  href={step.buttonLink}
                  className="inline-flex items-center justify-center transition-all relative h-11 px-4 py-2.5 text-sm font-semibold rounded-lg gap-1.5 w-fit bg-[#1abc9c] hover:bg-[#16a085] focus:outline-none focus:ring-2 focus:ring-[#1abc9c] focus:ring-offset-2 text-white mt-4"
                >
                  {step.buttonIcon && (
                     <img
                       alt="" 
                       loading="lazy"
                       width="20"
                       height="20"
                       className="w-5 h-5 filter invert" 
                       src={step.buttonIcon}
                     />
                  )}
                  <span className="leading-tight">{step.buttonText}</span>
                </a>
              )}
            </div>

            {/* Image Area */}
            <div className="group relative w-full overflow-hidden mt-auto">
              <img
                alt={step.imageAlt}
                loading="lazy"
                className="w-full relative duration-500 ease-in-out transition-all transform translate-y-[10%] group-hover:translate-y-0"
                src={step.imageSrc}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StepsSection;
