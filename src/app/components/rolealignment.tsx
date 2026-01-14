import RoleAlignmentGraphic from './rolealignmentgraphic';
import { RankedRole } from '@/lib/types';
 
export default function RoleAlignment({rankedRole} : {
    rankedRole: RankedRole
}) {
    return(
        <div className="rounded-lg m-auto p-20 block bg-[#e8e5da] w-[80%]">
            <h2 className="text-6xl/7 font-medium font-serif">Role Alignment</h2>

            <RoleAlignmentGraphic score={rankedRole.score} />
        
            <div className="m-3">
                <h3 className="text-4xl font-serif font-medium">Understanding Your {rankedRole.score_rank} Role Alignment</h3>
                <p className="text-base mt-5">{rankedRole.rank_desc}</p>
            </div>
        </div>
    );

}