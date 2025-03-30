"use client";
import React from "react";
import DarkModeToggle from "./toggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl font-bold">Jobchaser</a>
      </div>
      <div className="flex items-center gap-6 ml-auto">
        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* User Avatar and Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-secondary">New</span>
              </a>
            </li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
