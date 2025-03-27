"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";

const steps = [
  {
    title: "Get Started",
    description: "Click the Sign Up button to begin your journey.",
    buttonText: "Sign up to Connect",
    image: "/assets/images/banners/1.png",
    bgLight: "from-green-400 to-green-600",
    bgDark: "from-green-500 to-green-700",
  },
  {
    title: "Enter Your Details",
    description:
      "Complete your details on the easy-to-follow form—it's quick and simple!",
    image: "/assets/images/banners/2.png",
    bgLight: "from-blue-400 to-blue-600",
    bgDark: "from-blue-500 to-blue-700",
  },
  {
    title: "You’re All Set",
    description:
      "You're all set! Our team will reach out to guide you through the next steps.",
    image: "/assets/images/banners/3.png",
    bgLight: "from-yellow-400 to-yellow-600",
    bgDark: "from-yellow-500 to-yellow-700",
  },
];

const StepsSection = () => {
 
  return (
    <div className="w-full py-16 px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Get started in 3 easy steps
      </h2>

      {/* Steps Container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-5xl  rounded mx-auto">
        {steps.map((step, index) => ( 
          <div
            key={index}
            className="p-6 rounded-lg  flex bg-[#EAF5ED] flex-col items-center justify-between  dark:bg-gray-800 transition-colors duration-300"
          >
        

            {/* Step Title */}
            <h3 className="text-lg font-semibold  text-gray-800 dark:text-white">
              {index + 1}. {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-gray-600 text-left dark:text-gray-300">{step.description}</p>

            {/* Button */}
            <div className="mt-4">
              {step.buttonText && (
                <Button className="flex items-center gap-2">
                {step.buttonText}
                <FaArrowRight />
             </Button>
              )}

                  {/* Step Image */}
                  <div className="mt-4 overflow-hidden rounded h-auto">
  <img
    src={step.image}
    alt={`Step ${index + 1}`}
    className="w-full rounded bg-top transition-transform duration-300 ease-in-out hover:scale-110"
  />
</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default StepsSection;
