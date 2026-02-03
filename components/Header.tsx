"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {

  const pathname = usePathname();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setShowHeader(false);
      } else {
        // scrolling UP
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/70 border-b border-black/5
        transition-transform duration-300 ease-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-[#2C2C2C]">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition"
        >
          Dr. Maya Reynolds
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-10 text-sm font-medium">

          {/* BLOG */}
          <Link
            href="/blog"
            className={`
              relative transition hover:text-black
              after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-black after:transition-all
              ${
                pathname === "/blog"
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
            `}
          >
            Blog
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`
              relative transition hover:text-black
              after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-black after:transition-all
              ${
                pathname === "/contact"
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
            `}
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}
