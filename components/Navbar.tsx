"use client";

import { useState, useEffect } from "react";
import { Smartphone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["Product", "Corridors", "Pricing", "Company"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="relative z-50 container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-[#142F32] dark:text-[#E3FFCC]"
          >
            <Image src={"/img/logo2.svg"} alt="logo" width={120} height={120} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-[15px] font-sans font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[15px] font-bold">
            Sign In
          </Link>
          <button className="rounded-md bg-brand px-6 py-3 text-[16px] font-bold flex items-center gap-1.5 text-white">
            <Smartphone className="w-4 h-4" />
            Get the app
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-md"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#070e1e] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-800">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src={"/img/logo2.svg"} alt="logo" width={100} height={100} />
          </Link>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-md text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-[17px] font-medium py-3 border-b border-slate-800/60 text-slate-200 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div className="px-6 pb-10 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full text-center py-3 rounded-md border border-slate-700 text-[15px] font-bold text-slate-200 hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
          <button className="w-full rounded-md bg-brand py-3 text-[15px] font-bold flex items-center justify-center gap-2 text-white">
            <Smartphone className="w-4 h-4" />
            Get the app
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
