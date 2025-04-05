import React, { useEffect, useState } from "react";
import Position from "./Position";

const Navbar = () => {

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none mx-[12px]"
      style={{
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "6px",
      }}
    >
      <div className="w-full flex justify-between items-start mx-auto">
        <div
          className="flex items-center justify-center"
        >
          <img
            src="favicon.png"
            alt=""
            className="rounded-full border-black border-[2px] ml-[8px]"
          />
          {/* </p> */}
          <div className="hidden md:block pb-[18px]">
            <Position />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
