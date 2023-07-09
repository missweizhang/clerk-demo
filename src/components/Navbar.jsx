import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-3 border-b bg-white shadow-sm">
      <div className="flex justify-between items-center px-5 container mx-auto">
        <Link href="/" className="grow">
          Logo
        </Link>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
