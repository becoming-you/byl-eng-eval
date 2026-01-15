import { RankedRole } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

export default function RoleCard({rankedRole, selectedIndex, setSelectedIndex} : {
    rankedRole: RankedRole
    selectedIndex: number
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}){

    const handleClick = () => {
        setSelectedIndex(rankedRole.rank_number);
    };

    let isSelected = selectedIndex === (rankedRole.rank_number);

    let roleButtonSelected = "outline-2 outline-[#E8B6EB] rounded-sm m-auto my-auto w-[13%] h-[140px] bg-[#E8DFEB] shadow-lg shadow-purple-500/25";
    let roleButtonDefault = "outline-1 outline-gray-200 rounded-sm m-2 w-[8%] h-[110px] shadow-md hover:bg-[#E8DFEB] hover:outline-[#E8B6EB] transition hover:translate-y-[-2px]";

    let rankSelected = "text-5xl font-medium font-serif text-neutral-400 m-2 ml-6";
    let rankDefault = "text-2xl font-medium font-serif text-neutral-400 m-2";

    let roleSelected = "text-xl font-semibold text-purple-800";
    let roleDefault = "text-lg font-medium text-neutral-800";

    return (
        <button className={isSelected ? roleButtonSelected : roleButtonDefault} onClick={handleClick}>
            <h1 className={isSelected ? roleSelected : roleDefault}>{rankedRole.name}</h1>
            <div className="flex flex-row text-center mt-3">
                <h1 className={isSelected ? rankSelected : rankDefault}>{rankedRole.rank_number + 1}</h1>
                <Image className="ml-[15%]" src={`/roles/${rankedRole.id}.svg`} alt={`${rankedRole.name} symbol`} width={isSelected ? 60 : 40} height={40}/>
            </div>
        </button>
    )
    
    
}