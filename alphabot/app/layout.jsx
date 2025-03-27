"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
     className="overflow-x-hidden"
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <Navbar/>
        </ThemeProvider>
        {children}
      </body>
    </html>
  );x
}
