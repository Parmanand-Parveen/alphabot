"use client";
import React from "react";
import { useTheme } from "next-themes";

const StatsSection = () => {
 
  const stats = [
    { value: "25+", label: "Strategies" },
    { value: "100+", label: "Satisfied Investors" },
    { value: "1000+", label: "Orders Executed Daily" },
    { value: "100+", label: "Live Deployments" },
  ]

  return (
    <div className=" dark:bg-[#0A0A0A] py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          Alphabots: Proven Trading Excellence Across India
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 hover:scale-105 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg  bg-white dark:bg-[#0A0A0A] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
