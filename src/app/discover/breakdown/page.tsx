import { getAllRoles } from "@/lib/data/roles";
import { getUserResults } from "@/lib/data/users";
import Link from "next/link";
import { Results, Role, RankedRole } from "@/lib/types";
import RoleInfoPage from "../../components/roleinfopage";


export default async function Breakdown() {
  const clientId = "24601";
  const rolesDescribed = getAllRoles();
  const userInfo = getUserResults(clientId);
  
  interface RolesAndScore {
    id: string
    name: string
    role_desc: string
    core_drive: string
    most_like_when: string
    core_rank_desc: string;
    peripheral_rank_desc: string;
    top_rank_desc: string;
    bottom_rank_desc:string;
    score: number
  }

  function mergeAndSort(roles: Role[], scores: Results | null): RankedRole[] {
    let rankedRolesList : RankedRole[] = [];
    if (scores == null) {
      return rankedRolesList;
    }
    let sortedRoles : RolesAndScore[] = [];
    roles.forEach(role => {
      sortedRoles.push({
        id: role.id,
        name: role.name,
        role_desc: role.role_desc,
        core_drive: role.core_drive,
        most_like_when: role.most_like_when,
        core_rank_desc: role.core_rank_desc,
        peripheral_rank_desc: role.peripheral_rank_desc,
        top_rank_desc: role.top_rank_desc,
        bottom_rank_desc: role.bottom_rank_desc,
        score: scores[role.id] ?? 0
      })
    });
    sortedRoles.sort((a,b) => b.score - a.score);

    for (let i = 0; i < sortedRoles.length; i++) {
      rankedRolesList.push({
        id: sortedRoles[i].id,
        name: sortedRoles[i].name,
        role_desc: sortedRoles[i].role_desc,
        core_drive: sortedRoles[i].core_drive,
        most_like_when: sortedRoles[i].most_like_when,
        score: sortedRoles[i].score,
        rank: i < 4 
                ? "Core" 
                : (i >= sortedRoles.length - 3 ? "Periphery" : "Intermediate"),
        score_rank: sortedRoles[i].score > 50 ? "High" : "Low",
        rank_number: i,
        rank_desc: (i < 4 
                ? sortedRoles[i].core_rank_desc 
                : (i >= sortedRoles.length - 3 ? sortedRoles[i].peripheral_rank_desc 
                  : (sortedRoles[i].score > 50) ? sortedRoles[i].top_rank_desc : sortedRoles[i].bottom_rank_desc))
      })
    }
    return rankedRolesList;
  }

  const mergedData : RankedRole [] = mergeAndSort(rolesDescribed, userInfo);
  //inline-flex h-12 items-center justify-center rounded-full bg-[#10131a] px-6 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:translate-y-[-2px] hover:bg-black
  return <div className="bg-[#f8f5f0] p-5">
   
    <div>
      <Link 
        href="/discover"
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm  outline-1 outline-[#bebaa0] font-semibold tracking-[0.22em] text-black shadow-lg transition hover:translate-y-[-2px] hover:bg-slate-200">
        Back to Summary
      </Link>
    </div>

    <RoleInfoPage rankedRolesData={mergedData} />
    
  </div>;
}
