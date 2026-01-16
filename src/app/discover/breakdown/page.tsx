import { getUserResults } from "@/lib/data/users";
import { getAllRoles } from "@/lib/data/roles";
import SubNavigation from "@/components/sub-navigation";
import RoleList from "@/components/role-list";

const USER_ID = "24601";

export default async function Breakdown() {
  const results = await getUserResults(USER_ID);
  const roles = await getAllRoles();

  if (!results) {
    return <div>No results found</div>;
  }

  const sortedRoles = roles.sort((a, b) => results[b.id] - results[a.id]);

  return (
    <div>
      <SubNavigation />
      <RoleList roles={sortedRoles} />
    </div>
  );
}
