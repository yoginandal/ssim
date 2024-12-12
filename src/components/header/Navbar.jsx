import { NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/ssimlogo.webp";

import Drawer from "./Drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { navlinks } from "./navData";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="bg-red-600 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src={logo}
              alt="Indo Global Group of Colleges"
              className="h-12 sm:h-16 object-contain "
            />
          </Link>
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-4">
            {navlinks.map((link, index) => (
              <li
                key={link.name}
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <DropdownMenu open={openDropdown === index}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={
                          link.dropdown.some(
                            (item) => item.path === location.pathname
                          )
                            ? "rounded bg-red-700 px-3 py-2 -mt-2 text-red-100 outline-0"
                            : "rounded px-3 py-2 text-white -mt-2 hover:bg-red-700 hover:text-red-200"
                        }
                      >
                        {link.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {link.dropdown.map((dropdownLink) => (
                        <DropdownMenuItem
                          key={dropdownLink.name}
                          asChild
                          className="pr-6"
                        >
                          <NavLink
                            to={dropdownLink.path}
                            className={({ isActive }) =>
                              isActive
                                ? "w-full px-2 py-1.5 text-red-600"
                                : "w-full px-2 py-1.5 hover:text-red-600"
                            }
                          >
                            {dropdownLink.name}
                          </NavLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
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
          <Drawer />
        </nav>
      </div>
    </div>
  );
}
