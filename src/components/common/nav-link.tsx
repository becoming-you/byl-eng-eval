import Link from "next/link";
import { type PropsWithChildren } from "react";
import {
  NAV_BASE_STYLE,
  NAV_ACTIVE_STYLE,
  NAV_INACTIVE_STYLE,
} from "@/styles/nav-styles";

type NavLink = PropsWithChildren<{
  href: string;
  isActive: boolean;
}>;

export default function NavLink({ href, children, isActive }: NavLink) {
  return (
    <Link
      href={href}
      className={`${NAV_BASE_STYLE} ${
        isActive ? NAV_ACTIVE_STYLE : NAV_INACTIVE_STYLE
      } `}
    >
      {children}
    </Link>
  );
}
