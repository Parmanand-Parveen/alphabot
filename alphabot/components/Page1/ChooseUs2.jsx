import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const initialLargeCardId = 1; 

const cardData = [
  {
    id: 1,
    bgImage: 'https://framerusercontent.com/images/wbjZxjLhRpvLXinU7tlGJqXLv8.png',
    tag: 'Articles',
    title: "The Modern Contract Repository: What Is It and Why You Should Consider It",
  },
  {
    id: 2,
    bgImage: 'https://framerusercontent.com/images/n09JFtMFiYpDmunSCLBPqP6Y.png',
    tag: 'Articles',
    title:"Contract Management: Where to Begin?",
  },
  {
    id: 3,
    bgImage: 'https://framerusercontent.com/images/5FEv5UylieDMBCwNp0jNHy006BQ.png',
    tag: 'Articles',
    title: 'The Hidden Costs of Reactive Contract Management',
  },
  
];


const ChooseUs2 = () => {
  
  const [activeCardId, setActiveCardId] = useState(initialLargeCardId);

  return (
   
    <div className="py-16 md:py-24 bg-white overflow-hidden dark:bg-gray-900 dark:text-white">
   
      <div className="container mx-auto px-4">

       
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1 mb-4">
            <span className="text-xs font-opensauce-medium tracking-tight text-gray-600">BLOG</span>
          </div>
  
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-opensauce-semibold  text-gray-900  dark:text-white tracking-tight leading-tight">
            The latest from Exante
          </h2>
        </div>

      
        <div className="text-center mb-12 md:mb-16">
          <a
            href="./blog"
            className="inline-flex items-center gap-1.5 bg-white rounded-lg shadow-sm border border-gray-200 px-5 py-2.5 text-sm font-opensauce-semibold text-gray-900 hover:bg-gray-50 hover:shadow transition-all duration-300 group"
            style={{ boxShadow: 'rgba(143, 143, 143, 0.2) 0px 1px 3px 0px, rgb(235, 235, 235) 0px 0px 0px 1px, rgba(62, 62, 62, 0.04) 0px -2.4px 0px 0px inset' }}
          >
            <span>View more</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>


        <div className="transform-none"> 
        
          <div
              className="flex gap-3 md:gap-5 pb-4 overflow-x-auto no-scrollbar  md:overflow-x-visible"
              onMouseLeave={() => setActiveCardId(initialLargeCardId)}
          >
            {cardData.map((card) => {
              const isLargeOnDesktop = card.id === activeCardId;

              const baseClasses = `
                h-[350px] md:h-[400px]  /* Slightly smaller height on mobile */
                flex-shrink-0         /* Prevent shrinking within the scroll container */
                rounded-3xl
                overflow-hidden
                relative
                bg-cover bg-center
                transition-all duration-700 ease-in-out
                cursor-pointer
              `;

              const widthClasses = `
                w-4/5 sm:w-2/3       
                md:flex-shrink       
                md:w-auto           
                ${isLargeOnDesktop
                  ? 'md:basis-3/5 lg:basis-1/2'
                  : 'md:basis-1/5 lg:basis-1/4' 
                }
              `;

              return (
                <div
                  key={card.id}
                  className={`${baseClasses} ${widthClasses}`}
                  style={{ backgroundImage: `url("${card.bgImage}")` }}
                  onMouseEnter={() => setActiveCardId(card.id)}
                >
                
                  <div className={`
                    absolute inset-0 bg-black/50 flex flex-col justify-between items-start
                    p-4 md:p-8           
                    lg:backdrop-blur-[10px]
                    transition-all duration-500 ease-in-out
                    hover:backdrop-blur-[0px] 
                    ${!isLargeOnDesktop ? 'md:bg-black/70' : 'md:bg-black/50'} 
                  `}>
                 
                    <span className="py-1 px-2 md:py-2 md:px-2.5 inline-block uppercase border border-white/10 bg-white/12 text-white text-[10px] md:text-xs font-opensauce-medium rounded-lg backdrop-blur-xl transition-opacity duration-300">
                      {card.tag}
                    </span>

                  
                    <div className={`
                      transform-none transition-opacity duration-500 ease-in-out
                      ${isLargeOnDesktop ? 'opacity-100' : 'md:opacity-0'} /* Fade out on md+ if not large */
                    `}>
                      {card.title && (
                    
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-opensauce-semibold text-white leading-tight line-clamp-3 md:line-clamp-none">
                            {card.title}
                          </h3>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs2;