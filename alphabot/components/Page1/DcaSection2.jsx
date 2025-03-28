"use client"; 

import React, { useState } from 'react';


const toolkitItems = [
  {
    id: 'dca-bot',
    title: 'DCA Bot',
    iconSrc: 'https://3commas.cdn.prismic.io/3commas/Z66J5JbqstJ9-mwS_IconDcaBot.svg',
    posterSrc: 'https://images.prismic.io/3commas/Z6ZjHZbqstJ9-YSC_trading-toolkit-dca-bot-poster.png?auto=format,compress', 
    videoSrc: 'https://3commas.cdn.prismic.io/3commas/Z6E_BZbqstJ9-MFT_trading-toolkit-dca-bot.mp4',
    description: 'This bot stands as the most flexible and configurable within the 3Commas, offering a rich array of settings that users can customize to align with their unique strategies. Multi-pair bots can monitor over 100+ pairs to find the optimum deal that meets your conditions.',
    linkHref: 'https://3commas.io/dca-bots',
    linkText: 'About DCA Bot',
  },
  {
    id: 'signal-bot',
    title: 'Signal Bot',
    iconSrc: 'https://3commas.cdn.prismic.io/3commas/Z66J5pbqstJ9-mwZ_IconSignalBot.svg',
    posterSrc: 'https://images.prismic.io/3commas/Z6ZjHZbqstJ9-YSC_trading-toolkit-dca-bot-poster.png?auto=format,compress',
    videoSrc: 'https://3commas.cdn.prismic.io/3commas/Z6E_BpbqstJ9-MFV_trading-toolkit-signal-bot.mp4', 
    description: 'Take the best intel from TradingView and turn it into a bot. Signal Bot enables even more advanced strategies, such as trading Long and Short positions with the same bot, as well as the additional deal control made possible with Smart Trade integration.',
    linkHref: 'https://3commas.io/signal-bot',
    linkText: 'About Signal Bot',
  },
  {
    id: 'grid-bot',
    title: 'Grid Bot',
    iconSrc: 'https://3commas.cdn.prismic.io/3commas/Z66J5ZbqstJ9-mwW_IconGridBot.svg',
    posterSrc: 'https://images.prismic.io/3commas/Z6ZjHZbqstJ9-YSC_trading-toolkit-dca-bot-poster.png?auto=format,compress',
    videoSrc: 'https://3commas.cdn.prismic.io/3commas/Z6E_BZbqstJ9-MFU_trading-toolkit-grid-bot.mp4', 
    description: 'Pro traders love the consistency and set and forget low-maintenance capabilities. This AI bot truly excels in markets where the price trend is moving consistently sideways. It works by seeking to make a large number of small successful trades.',
    linkHref: 'https://3commas.io/grid-bot',
    linkText: 'About GRID bot',
  },
    {
    id: 'smart-trade',
    title: 'Smart Trade',
    iconSrc: 'https://3commas.cdn.prismic.io/3commas/Z66J55bqstJ9-mwa_IconSmartTrade.svg',
    posterSrc: 'https://images.prismic.io/3commas/Z6ZjHZbqstJ9-YSC_trading-toolkit-dca-bot-poster.png?auto=format,compress', 
    videoSrc: 'https://3commas.cdn.prismic.io/3commas/Z6E_B5bqstJ9-MFW_trading-toolkit-smart-trade.mp4', 
    description: 'Take granular control of deals to get the close you want. Use Trailing Take Profit, Trailing Stop Loss, and Multiple Take Profit to enhance the margins of your trades on any exchange, all from one interface.',
    linkHref: 'https://3commas.io/smart-trade',
    linkText: 'About Smart Trade',
  },
    {   
    id: 'terminal',
    title: 'Terminal',
    iconSrc: 'https://3commas.cdn.prismic.io/3commas/Z66J6JbqstJ9-mwc_IconTerminal.svg',
    posterSrc: 'https://images.prismic.io/3commas/Z6ZjHZbqstJ9-YSC_trading-toolkit-dca-bot-poster.png?auto=format,compress', 
    videoSrc: 'src="https://3commas.cdn.prismic.io/3commas/Z6E_CJbqstJ9-MFX_trading-toolkit-terminal.mp4"', 
    description: 'Strike fast and scalp opportunities for one-off trades on any of your connected exchanges. Terminal is your one-stop access point for fast manual trades of limit and market orders.',
    linkHref: 'https://3commas.io/smart-trade', 
    linkText: 'About Terminal',
  },
];


const ChevronDownIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition duration-300 w-6 h-6 shrink-0 ${className}`}>

    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const ArrowRightIcon = ({ className = "" }) => (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${className}`}>
    <path d="M20.7071 12.7071C20.803 12.6112 20.8753 12.5007 20.9241 12.3828C20.973 12.2649 21 12.1356 21 12C21 11.7272 20.8907 11.4799 20.7136 11.2994L20.7061 11.2919L13.7071 4.29289C13.3166 3.90237 12.6834 3.90237 12.2929 4.29289C11.9024 4.68342 11.9024 5.31658 12.2929 5.70711L17.5858 11L4 11C3.44771 11 3 11.4477 3 12C3 12.5523 3.44771 13 4 13L17.5858 13L12.2929 18.2929C11.9024 18.6834 11.9024 19.3166 12.2929 19.7071C12.6834 20.0976 13.3166 20.0976 13.7071 19.7071L20.7071 12.7071Z" fill="currentColor"></path>
 </svg>
);


const DcaSection2 = () => {
 
  const [activeIndex, setActiveIndex] = useState(toolkitItems[0].id); 

  const handleToggle = (id) => {
    setActiveIndex(activeIndex === id ? null : id); 
  };

  return (
  
    <section className="py-16 md:py-24 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12">

        <header className="flex flex-col gap-2 text-center lg:mb-10 lg:gap-3 col-span-1 lg:col-span-2">
          <h2
            id="3commas-trading-toolkit"
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            3Commas Trading Toolkit
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base lg:text-lg font-normal">
            Build your financial future with trading bots that can dominate any market
          </p>
        </header>

        <ul className="lg:col-start-1 lg:row-start-2 flex flex-col">
          {toolkitItems.map((item, index) => {
            const isOpen = activeIndex === item.id;
            return (
              <li key={item.id} className="flex flex-col overflow-hidden border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full gap-4 min-h-[5rem] py-3 items-center group text-left" // min-h-20 is 5rem
                  aria-expanded={isOpen}
                  aria-controls={`content-${item.id}`}
                >

                  <div className={`w-10 h-10 shrink-0 rounded-full grid place-items-center transition-colors ${isOpen ? 'bg-teal-500 dark:bg-teal-600' : 'bg-teal-100 dark:bg-gray-700'}`}>
                    <img
                      alt={`${item.title} Icon`}
                      loading="lazy"
                      width="18"
                      height="18"
                      className={`w-[18px] h-[18px] ${isOpen ? 'filter invert brightness-0' : 'dark:invert'}`} 
                      src={item.iconSrc}
                    />
                  </div>
                  <h3
                    id={item.id}
                    className={`text-xl font-semibold text-gray-900 dark:text-white w-full group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors ${isOpen ? 'text-teal-600 dark:text-teal-400' : ''}`}
                  >
                    {item.title}
                  </h3>
                  <ChevronDownIcon className={`text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 ${isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : 'rotate-0'}`} />
                </button>
                <div
                  id={`content-${item.id}`}
                  className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1500px] opacity-100 pt-2 pb-6' : 'max-h-0 opacity-0'}`}
                >
              
                   <p className="text-sm text-gray-600 dark:text-gray-300 font-normal lg:ml-14"> 
                    {item.description}
                  </p>
                  <figure
               
                  className="flex flex-col md:hidden sticky top-24 overflow-hidden duration-500 ease-in-out transition-all bg-gradient-to-b from-[#EAF5ED] to-[#EAF5F5] dark:from-gray-800 dark:to-gray-850 hover:from-[#E0F0E4] hover:to-[#DCEFEF] dark:hover:from-gray-700 dark:hover:to-gray-800 p-8 lg:p-10 rounded-2xl w-full max-w-md"
                >
               
                  <div className="relative isolate overflow-hidden mx-auto w-full shadow-lg rounded-xl border-[10px] border-white dark:border-gray-600 aspect-[9/16] max-h-[553px] ">
                  
                    <video
                      key={item.videoSrc} 
                      preload="metadata" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      className="relative z-10 w-full h-[550px] object-cover"
                      poster={item.posterSrc}
                      src={item.videoSrc}
                    />
                  </div>
                  
                  <div className="w-full h-[100px] absolute bottom-0 left-0 bg-gradient-to-t from-[#EAF5F5] via-[#EAF5F5]/80 to-transparent dark:from-gray-850 dark:via-gray-850/80" aria-hidden="true"></div>
                </figure>
                   <a
                    href={item.linkHref}
                    className="inline-flex items-center justify-start gap-1.5 w-fit text-sm font-semibold text-gray-500 hover:text-gray-900 focus:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:focus:text-white transition-colors lg:ml-14" 
                  >
                    <span className="leading-tight">{item.linkText}</span>
                    <ArrowRightIcon className="order-last" /> 
                   </a>
                  {isOpen && (
                    <div className="relative h-[2px] lg:ml-14" aria-hidden="true">
                      <div className="h-full w-full absolute inset-0 bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-full absolute inset-0 bg-teal-500 dark:bg-teal-600" style={{ width: '100%' }}></div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex lg:col-start-2 lg:row-start-2 relative items-start justify-center pt-0">
          {toolkitItems.map((item) => (
             activeIndex === item.id && (
                <figure
                  key={item.id}
                  className="flex flex-col sticky top-24 overflow-hidden duration-500 ease-in-out transition-all bg-gradient-to-b from-[#EAF5ED] to-[#EAF5F5] dark:from-gray-800 dark:to-gray-850 hover:from-[#E0F0E4] hover:to-[#DCEFEF] dark:hover:from-gray-700 dark:hover:to-gray-800 p-8 lg:p-10 rounded-2xl w-full max-w-md"
                >
               
                  <div className="relative isolate overflow-hidden mx-auto w-full shadow-lg rounded-xl border-[10px] border-white dark:border-gray-600 aspect-[9/16] max-h-[553px] ">
                  
                    <video
                      key={item.videoSrc} 
                      preload="metadata" 
                      autoPlay
                      loop 
                      muted 
                      playsInline
                      className="relative z-10 w-full h-[550px] object-cover"
                      poster={item.posterSrc}
                      src={item.videoSrc}
                    />
                  </div>
                  
                  <div className="w-full h-[100px] absolute bottom-0 left-0 bg-gradient-to-t from-[#EAF5F5] via-[#EAF5F5]/80 to-transparent dark:from-gray-850 dark:via-gray-850/80" aria-hidden="true"></div>
                </figure>
             )
          ))}
           {activeIndex === null && (
             <div className="flex items-center justify-center h-full text-gray-400">
               Select an item to view details
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default DcaSection2;