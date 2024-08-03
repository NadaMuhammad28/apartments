'use client';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import theme from "@services/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";

const DashboardLayout = () => {
  const isSmScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [isOpen, setIsOpen] = useState(!isSmScreen);

  return (
    <div className="lg:flex lg:h-screen h-auto ">
      <Sidebar isSmScreen={isSmScreen} isOpen={isOpen} />
      <div className="flex-1 flex flex-col">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="flex-1 bg-[#EEF2F6] rounded-3xl mt-16 p-4">
          <LocalizationProvider>
            <Outlet />
          </LocalizationProvider>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
