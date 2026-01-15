'use client'
import {use, useEffect, useState} from "react";
import RoleCards from "@/app/components/rolecards";
import RoleAlignment from "@/app/components/rolealignment";
import { RankedRole } from "@/lib/types";

export default function RoleInfoPage({rankedRolesData} : {
    rankedRolesData: RankedRole[]
}) {
    let [selectedIndex, setSelectedIndex] = useState<number>(0);
    let [selectedRank, setSelectedRank] = useState<string>("Core");

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

    let roleNavUnselected = "p-2 hover:border-b-5 hover:border-[#bebaa0] m-5 text-gray-400";
    let roleNavSelected = "p-2 border-b-5 border-[#bebaa0] m-5 text-black"

    useEffect(() => {
        if (selectedIndex <= 3) { setSelectedRank("Core") }
        else if (selectedIndex >= rankedRolesData.length - 3) { setSelectedRank("Periphery") }
        else { setSelectedRank("Intermediate") }
    }, [selectedIndex])

    return (
    <div>
        <div className="mb-10 mt-10">
        <a onClick={() => setSelectedIndex(0)} className={selectedRank === "Core" ? roleNavSelected : roleNavUnselected}>Core Roles</a>
        <a onClick={() => setSelectedIndex(4)} className={selectedRank === "Intermediate" ? roleNavSelected : roleNavUnselected}>Intermediate Roles</a>
        <a onClick={() => setSelectedIndex(rankedRolesData.length - 3)} className={selectedRank === "Periphery" ? roleNavSelected : roleNavUnselected}>Periphery Roles</a>
        <hr className="w-[40%] translate-x-3 translate-y-2"/>
        </div>

        <RoleCards rolecards={rankedRolesData} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        
        <div className="m-5 pt-14 text-neutral-800">
            <h2 className="text-6xl/7 font-serif font-medium">Who {" "}
                    <span className="italic font-serif font-medium">is</span> {getIndefArticleAndName(selectedRolePage)}?</h2>
            <p className="mt-10 mb-10 text-lg">{selectedRolePage.role_desc}</p>
            <br className="p2"/>

            <h2 className="text-6xl/7 font-medium font-serif">You Feel Most Like You When...</h2>
            <p className="mt-10 mb-10 text-lg">{selectedRolePage.most_like_when}</p>
            <br />

            <h2 className="text-6xl/7 font-medium font-serif">Core Drive</h2>
            <p className="mt-10 mb-10 text-lg">{selectedRolePage.core_drive}</p>
            <br />
        </div>

        <RoleAlignment rankedRole={selectedRolePage}/>
    
  </div>);

}