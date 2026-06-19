import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export default function Footer() {
  const links = {
    product: [
      { name: "Wallets", href: "#wallets" },
      { name: "Currency exchange", href: "#exchange" },
      { name: "Payments", href: "#payments" },
      { name: "Escrow", href: "#escrow" },
      { name: "Pricing", href: "#pricing" },
    ],
    company: [
      { name: "About us", href: "about" },
      { name: "Careers", href: "careers" },
      { name: "Customer stories", href: "stories" },
      { name: "Contact", href: "contact" },
    ],
    legal: [
      { name: "Privacy policy", href: "privacy" },
      { name: "Terms of service", href: "terms" },
      { name: "Licenses", href: "licenses" },
    ],
  };

  return (
    <footer className="  antialiased border-t border-gray-800">
      <div className="  pt-16 pb-8 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2.5">
              <Image
                src={"/img/logo2.svg"}
                alt="logo"
                width={150}
                height={150}
              />
            </div>

            {/* Tagline */}
            <p className="text-base  max-w-xs leading-relaxed">
              Cross-border payments built for African MSMEs.
            </p>

            {/* Social Connection Media Links */}
            <div className="flex items-center gap-3 mt-2">
              {/* LinkedIn */}
              <Link
                href="#linkedin"
                className="p-2.5 rounded-xl bg-[#191e2a] text-[#788fa9] hover:text-white transition-colors"
              >
                <TbBrandLinkedinFilled size={20} />
              </Link>
              {/* Twitter / X */}
              <Link
                href="#twitter"
                className="p-2.5 rounded-xl bg-[#191e2a]  text-[#788fa9] hover:text-white transition-colors"
              >
                <FaXTwitter size={20} />
              </Link>
              {/* Instagram */}
              <Link
                href="#instagram"
                className="p-2.5 rounded-xl bg-[#191e2a]  text-[#788fa9] hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 md:gap-8">
            {/* Product Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78cef0] mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm  hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78cef0] mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm  hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#78cef0] mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm  hover:text-white transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800"></div>

      <div className="pt-8 pb-8 container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs ">
        <div>&copy; 2026 NestPay. All rights reserved.</div>
        <div className="tracking-wide">
          Made for businesses trading across borders.
        </div>
      </div>
    </footer>
  );
}
