"use client";

import React from 'react';
import { FaTelegram, FaInstagram } from 'react-icons/fa';

const OurTeam = () => {

  const teamMembers = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuOHNXWduLt7WbuhKFsIU3pV0vyhEOPodmLnHB_pPNnCWblb3vjRoR7hKTuRE9cZSgy8&usqp=CAU",
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="uppercase text-sm mb-2">Our Team</h2>
        <h3 className="text-3xl font-semibold mb-8">Together We Grow!</h3>

        {/* Team Member Avatars */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {teamMembers.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Team Member ${index + 1}`}
              className="rounded-full w-20 h-20 object-cover"
            />
          ))}
        </div>

        {/* Join Us and Follow Us Buttons */}
        <div className="flex justify-center gap-6">
          <a href="#" className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-full flex items-center gap-2">
            <FaTelegram className="text-xl" />
            <span>20K+</span>
            <span>Join us</span>
            <span> </span>
          </a>
          <a href="#" className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-full flex items-center gap-2">
            <FaInstagram className="text-xl" />
            <span>200K+</span>
            <span>Follow us</span>
            <span> </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;