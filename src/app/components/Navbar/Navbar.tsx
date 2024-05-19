"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    ["Home", "/dashboard"],
    ["Model", "/team"],
    ["Be a Partner", "/projects"],
    ["More", "/reports"],
  ];
  const itemsWithDropdown = ["Model", "More"];
  return (
    <>
      <button
        className="text-white lg:hidden absolute top-5 right-5 z-50 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <nav
        className={`bg-white lg:bg-primary h-[50vh] lg:h-auto text-primary lg:text-white md:px-40 md:py-7 flex flex-col lg:flex-row justify-center lg:justify-between px-8 lg:items-center gap-4 lg:gap-0 fixed lg:static top-[7%] left-0 w-full z-40 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full lg:transform-none"
        }`}
      >
        <div className=" lg:space-x-4 flex flex-col lg:flex-row">
          {navItems.map(([title, url], index) => (
            <Link
              key={index}
              href={url}
              className="rounded-lg font-jakarta text-[1rem] leading-[1.3rem] px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 flex items-center"
            >
              {title}
              {itemsWithDropdown.includes(title) && (
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="lg:space-x-4 flex flex-col items-center gap-4 lg:gap-2 lg:flex-row font-jakarta font-semibold text-[1rem] leading-[1.3rem]">
          <Link href={"/"}>Login</Link>
          <Link
            href={"/"}
            className="py-3 px-7 bg-btnColor text-white font-jakarta rounded-[10px] shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 ml-0 lg:ml-4"
          >
            Join Our Dashboard
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
