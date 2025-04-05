import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";
import Position from "./Position";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     setScrolled(scrollTop > 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

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
          // onClick={() => {
          //   setActive("hero");
          //   window.scrollTo(0, 0);
          // }}
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
