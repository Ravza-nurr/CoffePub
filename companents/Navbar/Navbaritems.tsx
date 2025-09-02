import Link from "next/link";
import React from "react";

interface NavbaritemsProps {
  name: string;
  link: string;
}

const Navbaritems: React.FC<NavbaritemsProps> = ({ name, link }) => {
  return (
    <li className="inline-block text-xl py-4 px-4 text-[#f0f0f0] hover:text-slate-400 transition duration-200">
      <Link
        href={link}
        className="hover:text-slate-400 transition duration-200"
      >
        {name}
      </Link>
    </li>
  );
};

export default Navbaritems;
