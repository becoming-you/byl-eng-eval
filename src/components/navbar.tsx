"use client";

import { usePathname } from "next/navigation";
import NavLink from "@/components/nav-link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-x-4 m-10 border-b border-gray-200">
      <NavLink href="/discover" isActive={pathname === "/discover"}>
        Summary
      </NavLink>
      <NavLink
        href="/discover/breakdown"
        isActive={pathname === "/discover/breakdown"}
      >
        Role Breakdown
      </NavLink>
    </nav>
  );
}
