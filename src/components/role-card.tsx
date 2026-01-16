"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

import { Role } from "@/lib/types";
import { ROLE_COLORS } from "@/styles/role-colors";

type RoleCard = {
  role: Role;
  index: number;

  isSelected: boolean;
  onClick: () => void;
};

export default function RoleCard({
  role,
  index,
  isSelected,
  onClick,
}: RoleCard) {
  const cardRef = useRef<HTMLDivElement>(null);
  const colors = ROLE_COLORS[role.id];

  useEffect(() => {
    if (isSelected && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isSelected]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`shrink-0 rounded-xl p-5 pb-2 cursor-pointer 
        transition-all duration-300 ease-in-out max-h-min 
        ${
          isSelected
            ? `${colors.bg} ${colors.border} ${colors.shadow} border-2 shadow-lg`
            : "border-2 border-neutral-100 shadow-md opacity-70 hover:opacity-100"
        }
      `}
    >
      <h3
        className={`transition-all duration-300 ${
          isSelected
            ? `${colors.text} text-2xl font-bold`
            : "text-neutral-900 text-lg"
        }`}
      >
        {role.name}
      </h3>
      <div className="flex items-center gap-8 mt-3">
        <p
          className={`text-neutral-300 ${isSelected ? "text-8xl" : "text-6xl"}`}
        >
          {index + 1}
        </p>
        <Image
          src={`/roles/${role.id}.svg`}
          alt={role.name}
          width={isSelected ? 72 : 48}
          height={isSelected ? 72 : 48}
        />
      </div>
    </div>
  );
}
