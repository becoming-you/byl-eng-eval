'use client'
import {use, useState} from "react";
import RoleCards from "@/app/components/rolecards";
import RoleAlignment from "@/app/components/rolealignment";
import { RankedRole } from "@/lib/types";

export default function RoleInfoPage({rankedRolesData} : {
    rankedRolesData: RankedRole[]
}) {
    let [selectedIndex, setSelectedIndex] = useState<number>(0);

    function getRoleData(data: RankedRole[]): RankedRole {
        if (selectedIndex > data.length) {
            return {
                id: "",
                name: "",
                role_desc: "",
                core_drive: "",
                most_like_when: "",
                score: 0,
                rank: "",
                score_rank: "",
                rank_number: 0,
                rank_desc: ""
            }
        } 
        return data[selectedIndex];
    }

    let selectedRolePage = getRoleData(rankedRolesData);

    function getIndefArticleAndName(data: RankedRole) {
        const vowels = ['A', 'E', 'I', 'O', 'U']
        if (vowels.includes(data.name[0])) return "an " + data.name
        else return "a " + data.name
    }

    console.log(selectedIndex);

    return (
    <div>
        <div className="mb-10 mt-10">
        <a onClick={() => setSelectedIndex(0)} className="hover:border-b-5 hover:border-[#bebaa0] m-5">Core Roles</a>
        <a onClick={() => setSelectedIndex(4)} className="hover:border-b-5 hover:border-[#bebaa0] m-5">Intermediate Roles</a>
        <a onClick={() => setSelectedIndex(rankedRolesData.length - 3)} className="hover:border-b-5 hover:border-[#bebaa0] m-5">Periphery Roles</a>
        <hr className="w-[40%] translate-x-3"/>
        </div>

        <RoleCards rolecards={rankedRolesData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        
        <div className="m-5 pt-10">
            <h2 className="text-6xl/7 font-serif font-medium">Who {" "}
                    <span className="italic font-serif font-medium">is</span> {getIndefArticleAndName(selectedRolePage)}?</h2>
            <p className="mt-10 mb-10">{selectedRolePage.role_desc}</p>
            <br />

            <h2 className="text-6xl/7 font-medium font-serif">You Feel Most Like You When...</h2>
            <p className="mt-10 mb-10">{selectedRolePage.most_like_when}</p>
            <br />

            <h2 className="text-6xl/7 font-medium font-serif">Core Drive</h2>
            <p className="mt-10 mb-10">{selectedRolePage.core_drive}</p>
            <br />
        </div>

        <RoleAlignment rankedRole={selectedRolePage}/>
    
  </div>);

}