import { Role } from "@/lib/types";
import AlignmentCard from "./alignment-card";

type RoleDetails = {
  role: Role;
  roleScore: number;
  totalRoles: number;
  activeIndex: number;
};

export default function RoleDetails({
  role,
  roleScore,
  totalRoles,
  activeIndex,
}: RoleDetails) {
  const anOrA = /^[aeiou]/i.test(role.name) ? "an" : "a";

  return (
    <section className="flex flex-col gap-6 mt-12">
      <h2 className="font-serif">
        Who <span className="italic">is</span> {anOrA} {role.name}?
      </h2>
      <p className="min-h-18 text-balance text-lg">{role.role_desc}</p>
      <h2 className="font-serif ">You Feel Most Like You When...</h2>
      <p className="min-h-18 text-balance text-lg">{role.most_like_when}</p>
      <h2>Core Drive</h2>
      <p className="min-h-18 text-balance text-lg">{role.core_drive}</p>
      <AlignmentCard
        role={role}
        roleScore={roleScore}
        totalRoles={totalRoles}
        activeIndex={activeIndex}
      />
    </section>
  );
}
