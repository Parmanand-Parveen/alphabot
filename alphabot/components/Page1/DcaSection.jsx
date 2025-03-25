import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const DcaSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      title: "Real-Time Monitoring",
      content: "Our team monitors your systems in real-time for seamless execution.",
      video: "/assets/videos-webm/features/1.webm",
    },
    {
      title: "No Coding Required",
      content: "We offer a no-code platform, making trading accessible to all investors.",
      video: "/assets/videos-webm/features/2.webm",
    },
    {
      title: "End-To-End Automation",
      content: "Fully automated trading from start to finish with expert monitoring.",
      video: "/assets/videos-webm/features/3.webm",
    },
    {
      title: "Robust Simulations",
      content: "Accurate simulations that factor in data quality, slippages, and outliers.",
      video: "/assets/videos-webm/features/4.webm",
    },
    {
      title: "Ultra Fast",
      content: "Execute trades instantly with advanced tools for rapid market response.",
      video: "/assets/videos-webm/features/5.webm",
    },
    {
      title: "Personalised Algo Recommendations",
      content: "Get tailored recommendations based on your investment goals and risk tolerance.",
      video: "/assets/videos-webm/features/6.webm",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-16 py-12 bg-gray-100 dark:bg-gray-900">
      {/* Left - Accordion Section */}
      <div className="w-full lg:w-1/2">
        {items.map((item, index) => (
          <Collapsible key={index} className="mb-4 border-b border-gray-300 dark:border-gray-700">
            <CollapsibleTrigger
              className="flex justify-between items-center w-full text-lg font-medium px-4 py-3 bg-white dark:bg-gray-800 rounded-md shadow-md cursor-pointer transition-all"
              onClick={() => setSelectedIndex(index)}
            >
              {item.title}
              {selectedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 py-2 text-gray-600 dark:text-gray-300"
              >
                {item.content}
              </motion.div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      {/* Right - Video Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.video
          key={items[selectedIndex].video} // Ensures re-render when video changes
          src={items[selectedIndex].video}
          autoPlay
          loop
          muted
          className="w-full max-w-lg rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.video>
      </div>
    </div>
  );
};

export default DcaSection;
