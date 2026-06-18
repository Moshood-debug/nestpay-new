import { Smartphone } from "lucide-react";
import Link from "next/link";

const navLinks = ["Product", "Corridors", "Pricing", "Company"];

const Navbar = () => {
  return (
    <nav className="container mx-auto flex h-20 items-center justify-between px-4">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-[#142F32] dark:text-[#E3FFCC]"
        >
          EcoRide
        </Link>

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

      {/* CTA Button */}
      <div className="flex items-center gap-8">
        <Link href="/" className="text-[15px] font-bold">
          Sign In
        </Link>

        <button className="rounded-md bg-brand px-6 py-3 text-[16px] font-bold flex items-center gap-1.5">
          <Smartphone className="w-4 h-4" />
          Get the app
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
