"use client";

import { useState } from "react";

import RoleCard from "@/components/role-card";
import { Role } from "@/lib/types";

type RoleList = {
  roles: Role[];
};

export default function RoleList({ roles }: RoleList) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="flex items-center gap-4 px-5 mt-14 overflow-x-auto scroll-smooth hide-scrollbar">
      {roles.map((role, index) => (
        <RoleCard
          key={role.id}
          role={role}
          index={index}
          isSelected={index === selectedIndex}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </section>
  );
}
