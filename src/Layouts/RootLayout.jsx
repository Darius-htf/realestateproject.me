import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Footer from "../Components/Footer/Footer";
import DeskNav from "../Components/Navbars/DeskNav";
import MobNav from "../Components/Navbars/MobNav";

function RootLayout() {
  return (
    <div className="ROOTLAYOUT flex h-full w-full flex-col items-center justify-between bg-secondary">
      <header className="flex w-full justify-center px-5">
        <DeskNav />
        <MobNav />
      </header>
      <main className="flex w-full max-w-[1280px] flex-col items-center justify-center px-5">
        <Outlet />
      </main>
      <footer className="flex w-full justify-center px-5">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
