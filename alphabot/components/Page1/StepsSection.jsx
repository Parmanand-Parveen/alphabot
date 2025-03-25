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
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full py-16 px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Get started in <span className="text-blue-600 dark:text-blue-400">3 easy steps</span>
      </h2>

      {/* Steps Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-2xl shadow-lg w-full md:w-1/3 bg-gradient-to-br hover:scale-105 ${
              resolvedTheme === "dark" ? step.bgDark : step.bgLight
            } text-white relative overflow-hidden transition-all duration-300`}
          >
            {/* Step Number with Glow Effect */}
            <div className="absolute top-3 left-3 text-2xl font-bold bg-white text-gray-800 dark:bg-gray-200 dark:text-gray-900 rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
              {index + 1}
            </div>

            {/* Step Content */}
            <h3 className="text-xl font-semibold mb-3 mt-6">{step.title}</h3>
            <p className="text-sm mb-4">{step.description}</p>

            {/* Button (Only for Step 1) */}
            {step.buttonText && (
              <Button className="bg-white text-gray-800 dark:bg-gray-200 dark:text-gray-900 px-4 py-2 rounded-md flex items-center gap-2 shadow-md hover:bg-gray-200 dark:hover:bg-gray-300 transition">
                {step.buttonText} <FaArrowRight />
              </Button>
            )}

            {/* Step Image */}
            <motion.img
              src={step.image}
              alt={step.title}
              className="mx-auto mt-6 w-40 drop-shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
