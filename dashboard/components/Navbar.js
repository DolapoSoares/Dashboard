import React from "react";
import { useEffect } from "react";

import { HiOutlineUserCircle } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

// import avatar from "../data/avatar.jpg";
// import { Cart, Chat, Notification, UserProfile } from "./";
// import { useStateContext } from "../context/ContextProvider";

// const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
//   return (
//     <TooltipComponent content={title} position="BottomCenter">
//       <button
//         type="button"
//         onClick={customFunc}
//         style={{ color }}
//         className="relative text-xl rounded-full p-3 hover:bg-light-gray"
//       >
//         <span
//           style={{ background: dotColor }}
//           className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
//         />
//         {icon}
//       </button>
//     </TooltipComponent>
//   );
// };

const Navbar = () => {
  //   const {
  //     setActiveMenu,
  //     isClicked,
  //     handleClick,
  //     screenSize,
  //     setScreenSize,
  //     currentColor,
  //   } = useStateContext();

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setScreenSize(window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleResize);

  //     handleResize();

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };

  //     // eslint-disable-next-line
  //   }, []);

  //   useEffect(() => {
  //     if (screenSize <= 900) {
  //       setActiveMenu(false);
  //     } else {
  //       setActiveMenu(true);
  //     }
  //     // eslint-disable-next-line
  //   }, [screenSize]);

  return (
    <div className="flex justify-end p-2 md:mx-6 relative border-b-4 border-b-slate-200 w-auto">
      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
        <HiOutlineUserCircle />
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>
      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
        <p>
          <span className="text-gray-400 text-14">En</span>{" "}
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>

      {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
    </div>
  );
};

export default Navbar;
