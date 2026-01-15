import { type PropsWithChildren } from "react";
import {
  NAV_BASE_STYLE,
  NAV_ACTIVE_STYLE,
  NAV_INACTIVE_STYLE,
} from "@/styles/nav-styles";

type NavButton = PropsWithChildren<{
  onClick: () => void;
  isActive: boolean;
}>;

export default function NavButton({ onClick, children, isActive }: NavButton) {
  return (
    <button
      type="button"
      className={`cursor-pointer ${NAV_BASE_STYLE} ${
        isActive ? NAV_ACTIVE_STYLE : NAV_INACTIVE_STYLE
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
