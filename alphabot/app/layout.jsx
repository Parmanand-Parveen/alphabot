"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  
  const mouseMove = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  };


  return (
    <html lang="en">
      <body
      onMouseMove={(e)=> mouseMove(e)}
      >
        <div className="cursor z-50 absolute top-0 left-0 h-8 w-8 border border-amber-500 ring-4 rounded-full "></div>
        {children}
      </body>
    </html>
  );
}
