"use client";

import React from "react";
import { IconType } from "react-icons";

interface HeroButtonProps {
  icon: IconType;
  label: string;
  onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  icon: Icon,
  onClick,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#7a4637] gap-4 flex shadow-lg px-6 p-4 rounded-full items-center uppercase font-second2 hover:scale-105 transition duration-700"
    >
      <span>{label}</span>
      <Icon />
    </button>
  );
};

export default HeroButton;
