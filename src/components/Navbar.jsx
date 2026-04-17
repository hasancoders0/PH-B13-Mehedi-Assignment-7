import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  HiOutlineHome,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <HiOutlineHome size={20} />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <HiOutlineClock size={20} />,
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <HiOutlineChartBar size={20} />,
    },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="KeenKeeper" className="h-8 md:h-10" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#244D3F]"
        >
          <HiOutlineMenu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Offcanvas */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
