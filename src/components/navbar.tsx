"use client";

import { usePathname } from "next/navigation";
import NavButton from "@/components/common/nav-button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-x-4 m-10 border-b border-gray-200">
      <NavButton href="/discover" isActive={pathname === "/discover"}>
        Summary
      </NavButton>
      <NavButton
        href="/discover/breakdown"
        isActive={pathname === "/discover/breakdown"}
      >
        Role Breakdown
      </NavButton>
    </nav>
  );
}
