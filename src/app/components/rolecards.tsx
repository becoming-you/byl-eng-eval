import { RankedRole } from "@/lib/types"
import RoleCard from "./rolecard"

export default function RoleCards({rolecards, selectedIndex, setSelectedIndex} : {
    rolecards: RankedRole[]
    selectedIndex: number
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}) {


    const renderedRoleCards = rolecards.map((role) => <RoleCard rankedRole={role} key={role.id} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>)

    return (
    <div className="flex flex-row">
        <button onClick={() => setSelectedIndex(selectedIndex - 1)} className="border-1 border-black bg-white rounded-full h-[50%] my-auto p-2 enabled:hover:bg-slate-200 disabled:text-gray-300 disabled:border-gray-300" disabled={selectedIndex === 0}>&lt;</button>
        {renderedRoleCards}
        <button onClick={() => setSelectedIndex(selectedIndex + 1)} className="border-1 border-black bg-white rounded-full h-[50%] my-auto p-2 enabled:hover:bg-slate-200 disabled:text-gray-300 disabled:border-gray-300" disabled={selectedIndex === rolecards.length - 1}>&gt;</button>
    </div>)
}