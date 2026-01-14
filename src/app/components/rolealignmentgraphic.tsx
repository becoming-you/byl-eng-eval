export default function RoleAlignmentGraphic({score} : {
    score: number
}) {

    let awayFromNeutral = Math.abs(50 - score);

    let lowAlignmentStyle = "rounded-l-[10px] h-[110%] -translate-y-2.5 bg-linear-to-r from-rose-200 to-yellow-200 mx-auto -translate-x-1/2";
    let highAlignmentStyle = "rounded-r-[10px] h-[110%] -translate-y-2.5 bg-linear-to-r from-yellow-200 to-green-200 mx-auto translate-x-1/2";

    return (
    <div className="m-5 pt-5 pb-5">
        <div className="scale-markers-container bg-linear-to-r from-rose-50 from-10% via-yellow-100 via-50% to-green-100 to-80% m-auto w-[100%]">
            <div className={score > 50 ? highAlignmentStyle : lowAlignmentStyle} style={{ width: awayFromNeutral + "%"}} id="scale-fill">
                <h3 className="text-5xl font-serif absolute translate-y-5 ml-3 text-neutral-700">{score}</h3>
            </div>
            <div className="marker left-[0%]">Low</div>
            <div className="absolute top-[-20%] left-[50%] w-[2px] h-[140px] bg-neutral-300"></div>
            <div className="marker left-[50%]">Neutral</div>
            <div className="marker left-[100%]">High</div>
            
        </div>

    </div>)
}