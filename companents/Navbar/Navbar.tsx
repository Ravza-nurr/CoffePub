"use client";

import React from "react";
import Image from "next/image";
import Navbaritems from "./Navbaritems";
import OrderButton from "../Button/OrderButton";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Ana Sayfa",
    link: "/#",
  },
  {
    id: 2,
    name: "Hizmetler",
    link: "/#",
  },
  {
    id: 3,
    name: "Hakkımızda",
    link: "/#",
  },
  {
    id: 4,
    name: "İletişim",
    link: "/#",
  },
];

const Navbar: React.FC = () => {
  const handleOrderClick = () => {
    console.log("Order button clicked!");
    // Burada sipariş sayfasına yönlendirme yapabilirsiniz
  };

  return (
    <div className="bg-gradient-to-r from-[#421917] to-[#421917]/75 shadow-lg text-[#f0f0f0]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
          data-aos="fade-down"
          date-aos-once="true" data-aos-delay="300"

          className="font-pacifiko font-bold text-xl lg:text-3xl md:text-2xl items-center justify-center flex gap-2">
            <Image src="/images/logo/3.png" alt="logo" width={50} height={50} />
            CoffePub
          </div>

          <div 
          data-aos="fade-down"
          date-aos-once="true" data-aos-delay="400"
          
          className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-3">
              {Menu.map((menu) => (
                <Navbaritems key={menu.id} name={menu.name} link={menu.link} />
              ))}
            </ul>

            
          </div>
          <div
          data-aos="fade-down"
          date-aos-once="true" data-aos-delay="500"
          >
          <OrderButton
              icon={FaCoffee}
              label="Sipariş Ver"
              onClick={handleOrderClick}
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
