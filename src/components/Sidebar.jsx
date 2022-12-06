import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
const Navlinks = ({ handleClick }) => (
  <div className="mt-4">
    {links.map((item) => (
      <NavLink
        to={item.to}
        key={item.name}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="mr-2 h-6 w-6" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain cursor-pointer"
          onClick={() => navigate("/", { replace: true })}
        />
        <Navlinks />
      </div>
      <div className="absolute md:hidden block top-10 right-3 cursor-pointer">
        {isMobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          isMobileMenuOpen ? "left-0" : "-left-full"
        } top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b]`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <Navlinks handleClick={() => setIsMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
