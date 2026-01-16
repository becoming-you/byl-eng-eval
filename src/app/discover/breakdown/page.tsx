import { getUserResults } from "@/lib/data/users";
import { getAllRoles } from "@/lib/data/roles";
import SubNavigation from "@/components/sub-navigation";
import RoleList from "@/components/role-list";
import RoleDetails from "@/components/role-details";

const USER_ID = "24601";

type Breakdown = {
  searchParams: {
    role: string;
  };
};

export default async function Breakdown({ searchParams }: Breakdown) {
  const { role } = await searchParams;
  const results = await getUserResults(USER_ID);
  const roles = await getAllRoles();

  if (!results) {
    return <div>No results found</div>;
  }

  const sortedRoles = [...roles].sort((a, b) => results[b.id] - results[a.id]);
  const activeRole = sortedRoles.find((r) => r.id === role) || sortedRoles[0];
  const activeIndex = sortedRoles.findIndex((r) => r.id === role);

  if (!activeRole) {
    return <div>Role not found</div>;
  }

  return (
    <div>
      <SubNavigation />
      <RoleList roles={sortedRoles} activeRole={activeRole} />
      <RoleDetails
        role={activeRole}
        roleScore={results[activeRole.id]}
        totalRoles={sortedRoles.length}
        activeIndex={activeIndex}
      />
    </div>
  );
}
