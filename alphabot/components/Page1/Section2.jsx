"use client";
import React from "react";
import { useTheme } from "next-themes";

const StatsSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          Alphabots: Proven Trading Excellence Across India
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "25+", label: "Strategies" },
            { value: "100+", label: "Satisfied Investors" },
            { value: "1000+", label: "Orders Executed Daily" },
            { value: "100+", label: "Live Deployments" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
