"use client";

import React, { useEffect, useRef } from 'react';
import './ChooseUs.css'; // Ensure this is correctly pointing to your CSS file

const ChooseUs = () => {
  const stackAreaRef = useRef(null); // For accessing the stack area element

  useEffect(() => {
    // This code runs after the component is mounted (client-side)
    const stackArea = stackAreaRef.current;
    if (!stackArea) {
      console.warn("Stack area not found.");
      return; // Exit if stack area is not available
    }

    let cards = document.querySelectorAll(".card");

    if (!cards || cards.length === 0) {
      console.warn("Cards not found.");
      return; // Exit if cards are not available
    }

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = (cards.length - index).toString(); // Ensure zIndex is a string
        }
      });
    }

    rotateCards(); // Initial rotation

    const handleScroll = () => {
      const distance = window.innerHeight * 0.5;
      const topVal = stackArea.getBoundingClientRect().top;
      let index = Math.floor(-1 * (topVal / distance + 1));

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]; // Access card directly from the array
        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      }
      rotateCards();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array: runs only once after initial render

  return (
    <div className="stack-area" ref={stackAreaRef}>
      <div className="left">
        <div className="title">Our Features</div>
        <div className="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui
          quis, facere, cupiditate, doloremque natus ex perspiciatis ratione hic
          corrupti adipisci ea doloribus!
          <br />
          <button>See More Details</button>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <div className="sub">Simplified</div>
          <div className="content">Complex tasks are now simple</div>
        </div>
        <div className="card">
          <div className="sub">Boost Productivity</div>
          <div className="content">Perform Tasks in less time</div>
        </div>
        <div className="card">
          <div className="sub">Facilitated learning</div>
          <div className="content">train anyone from anywhere</div>
        </div>
        <div className="card">
          <div className="sub">Support</div>
          <div className="content">Now its 24/7 support</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;