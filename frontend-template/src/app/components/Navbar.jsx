"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header className="bg-transparent">
      <nav className="max-w-screen-xl mx-auto p-5 bg-transparent">
        <div className="flex justify-between items-center bg-transparent">
          {/* Logo on the left */}
          {/* <Link href="/">
            <img width="150px" src="/" alt="Logo" />
          </Link> */}
          <Link href ='/' className="text-blue-700 text-5xl">Logo</Link>

          {/* Centered Navigation Links */}
          <ul className="flex gap-8 text-xl mx-auto">
            <li>
              <Link
                href="/"
                className={`relative group transition duration-300 tracking-wide font-bold  ${
                  isActive("/") ? "text-blue-500" : "text-blue-700"
                } hover:text-blue-700`}
              >
                About us
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/") ? "w-full" : "w-0"
                  } bg-blue-500 group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/alimentation-program"
                className={`relative group transition duration-300 tracking-wide font-bold ${
                  isActive("/alimentation-program") ? "text-blue-500" : "text-blue-700"
                } hover:text-blue-700`}
              >
        Alimentation program
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/alimentation-program") ? "w-full" : "w-0"
                  } bg-blue-700 group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>

            <li>
              <Link
                href="/gyms"
                className={`relative group transition duration-300 tracking-wide font-bold ${
                  isActive("/gyms") ? "text-blue-500" : "text-blue-700"
                } hover:text-blue-700`}
              >
                Gyms
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/gyms") ? "w-full" : "w-0"
                  } bg-blue-700 group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative group transition duration-300 tracking-wide font-bold ${
                  isActive("/contact") ? "text-blue-500" : "text-blue-700"
                } hover:text-blue-700`}
              >
                Contact
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/contact") ? "w-full" : "w-0"
                  } bg-blue-700 group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
          </ul>

          {/* Login Button on the right */}
          <Link
            href="/login"
            className="bg-blue-700 text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}