"use client";


import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

 

  return (
    <header className="sticky top-0 z-50 bg-[#181818]">
      <nav className="max-w-screen-xl mx-auto px-5 py-6 bg-[#181818]">
        <div className="flex justify-between items-center bg-[#181818]">
          <Link href="/">
            <img width="150px" src="/" alt="" />
          </Link>
          <ul className="flex gap-5 text-lg">
            <li>
              <Link
                href="/"
                className={`relative group transition duration-300 tracking-widest  ${
                  isActive("/") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Gallerie 
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                A propos 
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/contact") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Contact 
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/contact") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Outils 
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
        
          </ul>
        </div>
      </nav>
    </header>
  );
}