"use client";

import { useRouter } from "next/navigation";

import RoleCard from "@/components/role-card";
import { Role } from "@/lib/types";

type RoleList = {
  roles: Role[];
  activeRole: Role;
};

export default function RoleList({ roles, activeRole }: RoleList) {
  const router = useRouter();

  const handleRoleSelect = (id: string) => {
    router.push(`?role=${id}`, { scroll: false });
  };

  return (
    <section className="flex items-center gap-4 px-5 pb-5 mt-14 overflow-x-auto scroll-smooth hide-scrollbar min-h-[250px]">
      {roles.map((role, index) => (
        <RoleCard
          key={role.id}
          role={role}
          index={index}
          isSelected={role.id === activeRole.id}
          onClick={() => handleRoleSelect(role.id)}
        />
      ))}
    </section>
  );
}
