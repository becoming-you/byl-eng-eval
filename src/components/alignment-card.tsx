import { Role } from "@/lib/types";
import { getRoleScore } from "@/utils/role-helper";
import AlignmentBar from "./alignment-bar";

type AlignmentCard = {
  role: Role;
  roleScore: number;
  totalRoles: number;
  activeIndex: number;
};

export default function AlignmentCard({
  role,
  roleScore,
  totalRoles,
  activeIndex,
}: AlignmentCard) {
  return (
    <div className="rounded-3xl bg-stone-200 p-10">
      <h2 className="mt-0">Role Alignment</h2>
      <AlignmentBar roleScore={roleScore} />
      <h3>Understand your role alignment</h3>
      <p className="text-xl mt-5">
        {getRoleScore(role, activeIndex, totalRoles)}
      </p>
    </div>
  );
}
