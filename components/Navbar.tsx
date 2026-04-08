"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Container from "@/app/_components/Container";

const menuItems = [
  { en: "Home", slug: "/" },
  { en: "About Us", slug: "/about" },
  { en: "How It Wroks", slug: "/how-it-works" },
  { en: "Services", slug: "/services" },

];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container className="mt-4 relative z-50">
      <div className="flex justify-between items-center bg-white p-4 rounded-full">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/site_logo.png" alt="logo" width={50} height={50} />
          <span className=" bg-gradient-to-r from-purpleOne via-purpleTwo to-purpleThree bg-clip-text text-transparent text-2xl font-bold">Vendly</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 text-base">
          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={cn(
                "hover:text-purpleColor transition text-lg",
                pathname === item.slug ? "text-blackColor font-medium" : "text-descriptionColor",
              )}
            >
              {item.en}
            </Link>
          ))}
        </nav>

        {/* Right: Language, Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-[14px]">
          <Link
            href="#"
            className="gradient-bg text-white font-medium cursor-pointer  px-9 py-3.5 rounded-full text-lg"
          >
            Get App Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiX className="text-blackColor" /> : <HiOutlineMenu className="text-blackColor" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "md:hidden fixed top-0 right-0 w-full bg-blackColor/20 backdrop-blur-xs h-screen    space-y-3 z-50 transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="w-[80%]  absolute top-0 p-4 right-0 h-full bg-white max-w-[320px]">
          <div className="flex w-full justify-between items-center mb-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/site_logo.png" alt="logo" width={50} height={50} />
              <span className="gradient-text text-2xl font-bold">Vendly</span>
            </Link>
            <button
              aria-label="close-menu"
              className="absolute top-4 right-4 z-10 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <HiX className="text-2xl text-blackColor" />
            </button>
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={cn(
                "block text-base py-2",
                pathname === item.slug ? "text-blackColor" : "text-descriptionColor",
              )}
              onClick={() => setMenuOpen(false)}
            >
              {item.en}
            </Link>
          ))}
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="gradient-bg text-white font-medium cursor-pointer  px-9 py-3.5 rounded-full text-lg"
            >
              Get App Now
            </Link>

          </div>
        </div>

      </div>
    </Container>
  );
}
