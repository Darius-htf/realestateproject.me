import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Footer from "../Components/Footer/Footer";
import DeskNav from "../Components/Navbars/DeskNav";
import MobNav from "../Components/Navbars/MobNav";

function RootLayout() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <header className="bg-secondary flex w-full justify-center px-5">
        <DeskNav />
        <MobNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-secondary flex w-full justify-center px-5">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
