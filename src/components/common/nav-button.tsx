"use client";

import Link from "next/link";
import { type PropsWithChildren } from "react";

type NavButton = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  isActive: boolean;
  className?: string;
  isDisabled?: boolean;
}>;

export default function NavButton({
  href,
  onClick,
  children,
  isActive,
  className,
  isDisabled,
}: NavButton) {
  const Component = href ? Link : ("button" as React.ElementType);

  const baseStyle = "border-b-4 pb-2 transition-all duration-500";
  const activeStyle = "font-bold border-lime-900";
  const inactiveStyle = "border-transparent text-gray-500 hover:text-gray-700";

  return (
    <Component
      {...(href ? { href } : {})}
      disabled={!href ? isDisabled : undefined}
      onClick={onClick}
      className={`cursor-pointer ${baseStyle} ${
        isActive ? activeStyle : inactiveStyle
      } ${className}`}
    >
      {children}
    </Component>
  );
}
