import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

//Assets
import Logo from "@/assets/Logo/logo.png";
import Search from "@/assets/Icons/search.png";
import User from "@/assets/Icons/user.png";

function MobNav() {
  return (
    <nav className="mob__nav flex w-full flex-col items-center justify-between gap-5 py-5 lg:hidden">
      <div className="nav__logo w-full">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="nav__links text-accent flex flex-col w-full items-start justify-between gap-5 font-bold">
        <li>
          <NavLink className="relative" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="relative" to="s">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink className="relative" to="a">
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink className="relative" to="c">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="nav__actions flex w-full flex-col items-start justify-end gap-5">
        <div className="nav__icons flex items-center justify-between gap-5">
          <Link>
            <img className="size-6" src={Search} alt="search" />
          </Link>
          <Link>
            <img className="size-6" src={User} alt="user" />
          </Link>
        </div>
        <Link className="w-full lg:w-[122px]" to="signup">
          <Button text={"Sign up"} />
        </Link>
      </div>
    </nav>
  );
}

export default MobNav;
