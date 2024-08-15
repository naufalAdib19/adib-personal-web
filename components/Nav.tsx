import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/work",
    name: "Work",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:flex gap-x-6">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            pathName == link.path &&
            "text-accent border-b-2 border-accent transition-all duration-75"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
