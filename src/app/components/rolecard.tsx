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

    return (
        <button className={selectedIndex === (rankedRole.rank_number) ? "role-button-selected" : "role-button"} onClick={handleClick}>
            <h1 className="text-lg font-semibold text-black">{rankedRole.name}</h1>
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5 flex flex-row">
                    <h1 className="text-xl font-semibold font-serif text-black m-2">{rankedRole.rank_number + 1}</h1>
                    <Image className="inline-block ml-[25%]" src={`/roles/${rankedRole.id}.svg`} alt={`${rankedRole.name} symbol`} width={36} height={36}/>
                </div>
            </div>
        </button>
    )
    
    
}