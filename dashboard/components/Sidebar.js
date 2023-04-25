import React from "react";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";

import { NavLink } from "@/context/Navlink";

import { links } from "@/data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  //   const { currentColor, activeMenu, setActiveMenu, screenSize } =
  //     useStateContext();

  //   const handleCloseSideBar = () => {
  //     if (activeMenu !== undefined && screenSize <= 900) {
  //       setActiveMenu(false);
  //     }
  //   };

  //   const activeLink =
  //     "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  //   const normalLink =
  //     "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="absolute top-0 left-0 w-1/6 bg-[#FFFBF7] ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pl-10">
      {/* {activeMenu && ( */}
      <>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            //   onClick={handleCloseSideBar}
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
          >
            <span className="items-center gap-3 ml-3 mt-4 text-xl font-extrabold text-slate-900 ">
              klasha
            </span>
          </Link>
        </div>
        <div className="mt-10 ">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase ">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  href={`/${link.name}`}
                  key={link.name}
                  // onClick={handleCloseSideBar}
                  // style={({ isActive }) => ({
                  //   backgroundColor: isActive ? currentColor : "",
                  // })}
                  className="flex flex-row font-light"
                >
                  <span className="m-2.5">{link.icon}</span>
                  <span className="capitalize m-1.5 ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-20">
          <div className="pt-5">
            <button className=" flex flex-row border border-x-red-500 bg-red-500 rounded-full pl-2 pr-3 pt-1 pb-1">
              <AiOutlineQuestionCircle className="m-1"/>
              Support
            </button>
          </div>
          <div className="pt-5">
            <button className=" flex flex-row border border-neutral-950 pl-2 pr-3 pt-1 pb-1 rounded-lg">
             <HiChevronLeft className="m-1"/>
             hide pannel
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
