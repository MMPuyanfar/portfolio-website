"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    {
      linkText: "About Me",
      href: "#about",
    },
    {
      linkText: "Projects",
      href: "#projects",
    },
    {
      linkText: "Contact Me",
      href: "#contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto py-5 px-4">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="Logo"
            className="ml-10 md:ml-5 "
          />
        </Link>
        <div className="mobile-menu block md:hidden mr-5 sm:mr-10">
          {navbarOpen ? (
            <button onClick={()=>setNavbarOpen(false)} className="text-slate-200 flex items-center p-3 border rounded border-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=>setNavbarOpen(true)} className="text-slate-200 flex items-center p-3 border rounded border-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mr-5 ">
            {navLinks.map((l, i) => (
              <li key={i}>
                <NavLink
                  linkText={l.linkText}
                  href={l.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen? <MenuOverlay links={navLinks} />:null}
    </nav>
  );
}
