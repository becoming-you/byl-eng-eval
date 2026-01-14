import { RankedRole } from "@/lib/types"
import RoleCard from "./rolecard"
import { useState, useEffect } from "react";

export default function RoleCards({rolecards, selectedIndex, setSelectedIndex} : {
    rolecards: RankedRole[]
    selectedIndex: number
    setSelectedIndex: any
}) {


    const renderedRoleCards = rolecards.map((role) => <RoleCard rankedRole={role} key={role.id} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>)

    return (
    <div className="flex flex-row overflow-scroll">
    {renderedRoleCards}
    </div>)
}