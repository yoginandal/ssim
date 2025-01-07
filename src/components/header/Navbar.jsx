import React, { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink, useLocation, Link } from "react-router-dom";
import Drawer from "./Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { navlinks } from "./navData";
import logo from "@/assets/ssimlogo.webp";

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback((index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Delay closing by 150ms
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white lg:bg-blue-900 px-4 py-4">
      <div className="container mx-auto">
        <nav>
          <div className="flex justify-between items-center lg:hidden">
            <Link to="/">
              <img src={logo} alt="SSIM Logo" className="h-12" />
            </Link>
            <Drawer className="text-black bg-black" />
          </div>

          <ul className="hidden lg:flex justify-between items-center">
            {navlinks.map((link, index) => (
              <li
                key={link.name}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {link.dropdown ? (
                  <div>
                    <button
                      className={`rounded px-3 py-2 text-white -mt-2 hover:bg-red-700 hover:text-red-200 ${
                        openDropdown === index ? 'bg-red-700 text-red-100' : ''
                      }`}
                    >
                      {link.name}
                    </button>
                    {openDropdown === index && (
                      <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {link.dropdown.map((dropdownLink) => (
                            <NavLink
                              key={dropdownLink.name}
                              to={dropdownLink.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm ${
                                  isActive ? 'bg-gray-100 text-red-600' : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                                }`
                              }
                              role="menuitem"
                            >
                              {dropdownLink.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded bg-red-700 px-3 py-2 text-red-100"
                        : "rounded px-3 py-2 text-white hover:bg-red-700 hover:text-red-200"
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

