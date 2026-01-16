"use client";

import { useRouter } from "next/navigation";

import NavButton from "@/components/common/nav-button";
import { Role } from "@/lib/types";

type NavOption = {
  name: string;
  slug: string;
  startIndex: number;
};

type SubNavigation = {
  items: NavOption[];
  activeIndex: number;
  roles: Role[];
};

export default function SubNavigation({
  items,
  activeIndex,
  roles,
}: SubNavigation) {
  const router = useRouter();

  const handleCategorySelect = (startIndex: number) => {
    const targetRole = roles[startIndex];
    if (targetRole) {
      router.push(`?role=${targetRole.id}`, { scroll: false });
    }
  };

  const activeCategory = [...items]
    .reverse()
    .find((item) => activeIndex >= item.startIndex);

  return (
    <nav className="flex gap-10 max-w-min border-b border-gray-200 whitespace-nowrap">
      {items.map((item) => {
        const isActive = activeCategory?.slug === item.slug;

        return (
          <NavButton
            key={item.slug}
            onClick={() => handleCategorySelect(item.startIndex)}
            isActive={isActive}
          >
            {item.name}
          </NavButton>
        );
      })}
    </nav>
  );
}
