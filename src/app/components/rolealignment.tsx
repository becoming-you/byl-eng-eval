import RoleAlignmentGraphic from './rolealignmentgraphic';
import { RankedRole } from '@/lib/types';
 
export default function RoleAlignment({rankedRole} : {
    rankedRole: RankedRole
}) {
    return(
        <div className="rounded-4xl m-auto px-15 pt-20 pb-10 block bg-[#f0eee6] w-[80%] text-neutral-800">
            <h2 className="text-6xl/7 font-medium font-serif pb-5">Role Alignment</h2>

            <RoleAlignmentGraphic score={rankedRole.score} />
        
            <div className="m-3">
                <h3 className="text-4xl font-serif font-medium">Understanding Your {rankedRole.score_rank} Role Alignment</h3>
                <p className="text-base mt-5 text-lg">{rankedRole.rank_desc}</p>
            </div>
        </div>
    );

}