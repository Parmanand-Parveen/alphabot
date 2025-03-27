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
   <div className="flex flex-col justify-center gap-6 my-7 px-6 lg:px-0 dark:bg-gray-900">
   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white text-center">
  Experience Alphabot’s sleek array of features
  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
    Where innovation and elegance come together seamlessly
  </p>
</h2>

   
   <div className="flex flex-col md:flex-row gap-4 w-full items-center md:justify-center max-w-5xl lg:mx-auto">
      
      {/* Left - Accordion Section */}
      <div className="w-full lg:w-1/2 ">
        {items.map((item, index) => (
          <Collapsible key={index} open={selectedIndex === index} className="w-full">
            <CollapsibleTrigger
              className="flex justify-between border-b w-full border-gray-200 dark:border-gray-600 py-4 lg:px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => setSelectedIndex(selectedIndex === index ? -1 : index)}
            >
              {item.title}
              <div>{selectedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
            </CollapsibleTrigger>
            <CollapsibleContent className="w-full text-left py-2 px-6 text-muted-foreground">
              <motion.div
                // initial={{ opacity: 0, height: 0 }}
                // animate={{ opacity: 1, height: "auto" }}
                // exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {item.content}
              </motion.div>
              <motion.video
          key={items[selectedIndex]?.video || ""}
          src={items[selectedIndex]?.video || ""}
          autoPlay
          loop
          muted
          className="block md:hidden"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
        ></motion.video>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      {/* Right - Video Section */}
      <div className="w-1/3 h-full hidden md:block bg-[#EAF5ED]">
        <motion.video
          key={items[selectedIndex]?.video || ""}
          src={items[selectedIndex]?.video || ""}
          autoPlay
          loop
          muted
          className="p-8"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
        ></motion.video>
      </div>
    </div>
   </div>
  );
};

export default DcaSection;
