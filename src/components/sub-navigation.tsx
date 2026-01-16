"use client";

import NavButton from "@/components/common/nav-button";
import { ROLE_NAV_ITEMS } from "@/constants/navigation";

export default function SubNavigation() {
  const handleRoleSelect = (slug: string) => {
    console.log(slug);
  };

  return (
    <nav className="flex gap-10 max-w-min border-b border-gray-200 whitespace-nowrap">
      {ROLE_NAV_ITEMS.map((role) => (
        <NavButton
          key={role.slug}
          onClick={() => handleRoleSelect(role.slug)}
          isActive={false}
        >
          {role.name}
        </NavButton>
      ))}
    </nav>
  );
}
