import React from "react";

// Assets:
import Instagram from "@/assets/Icons/Socials/instagram.png";
import Facebook from "@/assets/Icons/Socials/facebook.png";
import Twitterx from "@/assets/Icons/Socials/twitterx.png";
import Logo from "@/assets/Logo/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-accent flex w-full max-w-[1280px] flex-col items-center justify-center gap-20 py-10 lg:flex-row lg:items-start lg:justify-between">
      <div className="footer__side flex w-full flex-col items-start gap-3 lg:w-1/3">
        <div className="footer__logo">
          <Link>
            <img src={Logo} alt="footer-image" />
          </Link>
        </div>
        <p className="footer__slogan text-accent text-start font-bold">
          Bringing you closer to your dream home, one click at a time.
        </p>
      </div>
      <div className="footer__lists grid w-full grid-cols-2 gap-3 md:grid-cols-4 lg:w-2/3">
        <ul className="text-accent flex flex-col items-start justify-start gap-5 text-xl font-bold">
          <label className="text-2xl">About</label>
          <li className="opacity-55">
            <Link>Our Story</Link>
          </li>
          <li className="opacity-55">
            <Link>Careers</Link>
          </li>
          <li className="opacity-55">
            <Link>Our Team</Link>
          </li>
          <li className="opacity-55">
            <Link>Resources</Link>
          </li>
        </ul>
        <ul className="text-accent flex flex-col items-start justify-start gap-5 text-xl font-bold">
          <label className="text-2xl">About</label>
          <li className="opacity-55">
            <Link>Our Story</Link>
          </li>
          <li className="opacity-55">
            <Link>Careers</Link>
          </li>
          <li className="opacity-55">
            <Link>Our Team</Link>
          </li>
          <li className="opacity-55">
            <Link>Resources</Link>
          </li>
        </ul>
        <ul className="text-accent flex flex-col items-start justify-start gap-5 text-xl font-bold">
          <label className="text-2xl">About</label>
          <li className="opacity-55">
            <Link>Our Story</Link>
          </li>
          <li className="opacity-55">
            <Link>Careers</Link>
          </li>
          <li className="opacity-55">
            <Link>Our Team</Link>
          </li>
          <li className="opacity-55">
            <Link>Resources</Link>
          </li>
        </ul>
        <ul className="text-accent flex flex-col items-start justify-start gap-5 text-xl font-bold">
          <label className="text-2xl">About</label>
          <li className="opacity-55">
            <Link>Our Story</Link>
          </li>
          <li className="opacity-55">
            <Link>Careers</Link>
          </li>
          <li className="opacity-55">
            <Link>Our Team</Link>
          </li>
          <li className="opacity-55">
            <Link>Resources</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
