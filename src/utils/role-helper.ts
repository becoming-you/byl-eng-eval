import { Role } from "@/lib/types";

export function getRoleScore(role: Role, index: number, totalRoles: number) {
  if (index === 0) return role.top_rank_desc;
  if (index === totalRoles - 1) return role.bottom_rank_desc;
  if (index < 4) return role.core_rank_desc;
  if (index > totalRoles - 5) return role.peripheral_rank_desc;

  return `You lean into your role qualities situationally, 
  using these traits to provide balance and support to your 
  primary drivers when the environment calls for it.`;
}
