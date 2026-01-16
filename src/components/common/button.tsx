"use client";

import Link from "next/link";
import { type PropsWithChildren } from "react";

type Button = PropsWithChildren<{
  type?: "button" | "submit";
  href?: string;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}>;

export default function Button({
  children,
  type = "button",
  href,
  className,
  isDisabled,
  onClick,
  icon,
}: Button) {
  const Component = href ? Link : ("button" as React.ElementType);
  const isLink = !!href;

  return (
    <Component
      {...(!isLink && { type })}
      {...(isLink ? { href } : {})}
      disabled={!isLink ? isDisabled : undefined}
      onClick={onClick}
      className={`flex items-center justify-center w-fit whitespace-nowrap border border-gray-300 rounded-full px-4 py-2 shadow-md ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
}
