"use client"
import React from "react";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar"; // Adjust path as needed
import Header from "../components/header"; // Adjust path as needed
import { LocalizationProvider } from "@mui/x-date-pickers";
import "./globals.css"; 
const inter = Inter({ subsets: ["latin"] }); 


const Layout = ({ children }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:flex lg:h-screen h-auto">
          <Sidebar   />
          <div className="flex-1 flex flex-col">
            <Header  />
            <main className="flex-1 bg-[#EEF2F6] rounded-3xl mt-16 p-4">
              <LocalizationProvider>{children}</LocalizationProvider>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
